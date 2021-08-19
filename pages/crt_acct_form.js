import React from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native'

import InputField from '../components/input_field'

export default function CreateAccountForm() {
    return (
        <ScrollView style={styles.main}>
            <View>
                <CustomInputField label="First Name"/>
                <CustomInputField label="Last Name"/>
            </View>
            <CustomInputField label="Email"/>
            <CustomInputField label="Phone"/>
            <CustomInputField label="Password" isSecure={true}/>
            <CustomInputField label="Confirm Password" isSecure={true}/>

            <View>

            </View>

        </ScrollView>
    )
}

//note: 
function CustomInputField({label, isSecure}) {
    return (
        <View style={{ marginBottom: 24 }}>
            <InputField label={label} isSecure={isSecure}/>
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