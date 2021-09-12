import React, { useState } from 'react'
import {
    View,
    ScrollView,
    // Alert,
    StyleSheet
} from 'react-native'

import { firebase } from '../config'
import { gl_updateUserCred } from '../redux_side/action_creators'
import { connect } from 'react-redux'

import InputField from '../components/input_field'
import { MainThemeBtn, SecondaryThemeBtn } from '../components/action_btn'


//TODO: on pressing continue, the info should be sent to the server

function CreateAccountForm({ navigation, dispatch }) {

    const [usin, setUserInput] = useState({
        name: null,
        email: null,
        phone: null,
        password: null,
        confirmPassword: null
    })

    const validateInput = (usin) => {

        //Make sure no field is empty
        for (var key in usin) {
            if (!usin[key]) {
               alert(`The ${key} field is required`)
                return false
            }
        }
        // console.log()

         //make sure the email address entered looks like an actual one
         const validateEmail = (email) => {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if (emailRegex.test(String(email).toLowerCase().trim())) {
                return true
            }
            alert('Please make sure your email address is in the correct format e.g. \'olowu@domain.com\'')
            return false

        }

        const validatePhoneNumber = (phone) => {
            const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

            if (phoneRegex.test(String(phone).toLowerCase().trim())) {
                return true
            }
            alert('Please make sure your phone number consists mainly of numbers and is atleast 9 digits. (Parentheses and line strokes are also acceptable)')
            return false
        }

        /*
         make sure the password entered is minimum of 8 characters,
         has atleast 1 uppercase character, atleast 1 lowercase character,
         atleast 1 numeric character and atleast 1 special character
         */
        const validatePassword = (password) => {
            const passwordRegex = /^(?=.*[a-zA-Z0-9!@#\$%\^&\*])(?=.{8,})/
            // console.log('validatePassword called')

            if (passwordRegex.test(String(password).toLowerCase().trim())) {
                return true
            }
           alert('Please make sure that your password contains a minimum of 8 characters, atleast 1 uppercase, atleast 1 lowercase, atleast 1 numeric and atleast 1 special character')
            return false
        }

        //make sure that the confirmPassword field is the same as the password field
        const validateConfirmPassword = (confirmPassword) => {

            if (usin.password === confirmPassword) {
                return true
            }
           alert('Please make sure that your \'Password\' field and your \'Confirm Password\' field matches')
            return false
        }



        if (validateEmail(usin.email) && validatePhoneNumber(usin.phone) && validatePassword(usin.password) && validateConfirmPassword(usin.confirmPassword)) {
            return true
        }
       
        return false
    }

    const onPressContinue = () => {
        if(validateInput(usin)) {
            //send the validated input to server
            firebase
            .auth()
            .createUserWithEmailAndPassword(usin.email, usin.password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email: usin.email,
                    name: usin.name,
                    phone: usin.phone
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        //update the redux store with the user credentials
                        dispatch(gl_updateUserCred(data))
                        navigation.navigate('Home')
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
        }
    }

    const onPressCancel = () => {
        navigation.navigate('LoginSignup')
    }
    
    return (
        <ScrollView style={styles.main}>
            <CustomInputField label="Full Name" callback={name => setUserInput({...usin, name})}/>      
            <CustomInputField label="Email" callback={email => setUserInput({...usin, email})}/>
            <CustomInputField
             label="Phone"
             callback={phone => setUserInput({...usin, phone})}
             dropdownLabel="Area code"
             dropdownList={['+234']}
            />
            <CustomInputField
             callback={password => setUserInput({...usin, password})}
             label="Password"
             isSecure={true}/>
            <CustomInputField
             label="Confirm Password"
             isSecure={true}
             callback={confirmPassword => setUserInput({...usin, confirmPassword})}/>


            <View style={{ bottom: 0, flexDirection: 'row', justifyContent: 'space-between'}}>                
                <SecondaryThemeBtn value="Cancel" onPress={() => onPressCancel()}/>
                <View style={{flex: 1}}/>           
                <MainThemeBtn value="Continue" onPress={() => onPressContinue()}/>
            </View>

        </ScrollView>
    )
}

export default connect()(CreateAccountForm)

//note: 
function CustomInputField({label, isSecure, callback, dropdownLabel, dropdownList}) {
    return (
        <View style={{ marginBottom: 24 }}>
            <InputField
             label={label}
             isSecure={isSecure}
             callback={callback}
             dropdownLabel={dropdownLabel}
             dropdownList={dropdownList}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
       
        padding: 32,
        backgroundColor: '#3f3f3f',
        height: '100%'
    },


})