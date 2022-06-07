import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableWithoutFeedback
} from 'react-native'

import { auth } from '../config'
import { gl_updateUserCred } from '../redux_side/action_creators'

import InputField from '../components/input_field'
import { MainThemeBtn, SecondaryThemeBtn } from '../components/action_btn'

function Login({ navigation, dispatch }) {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const onPressLogin = () => {
            auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
               
               const {uid, email} = response.user
               dispatch(gl_updateUserCred({uid, email}))
               navigation.navigate('DrawerNav')
            })
            .catch(error => {
                alert(error)
            })
    }

    const onPressCancel = () => {
        navigation.navigate('LoginSignup')
    }

    return (
        <View style={styles.main}>
          
            <CustomInputField label='Email Address' callback={email => setEmail(String(email).trim())}/>
            <CustomInputField label='Password' isSecure={true} callback={password => setPassword(password)}/>
            <TouchableWithoutFeedback>
                <Text style={styles.forgotPassword}>Reset password</Text>
            </TouchableWithoutFeedback>
            <View style={{ bottom: 0, flexDirection: 'row', justifyContent: 'space-between'}}>                
                <SecondaryThemeBtn value="Cancel" onPress={() => onPressCancel()}/>
                <View style={{flex: 1}}/>           
                <MainThemeBtn value="Continue" onPress={() => onPressLogin()}/>
            </View>
        </View>
    )
}

export default connect()(Login)

function CustomInputField({label, isSecure, callback}) {
    return (
        <View style={{ marginBottom: 36 }}>
            <InputField label={label} isSecure={isSecure} callback={callback}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 32,
        height: '100%',
        // justifyContent: 'center',
        backgroundColor: '#3F3F3F'
    },

    forgotPassword: {
        color: '#F69B46',
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        marginBottom: 14
    }
})


