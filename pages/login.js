import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableWithoutFeedback
} from 'react-native'

import InputField from '../components/input_field'
import MainThemeBtn from '../components/action_btn';

export default function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    return (
        <View style={styles.main}>
          
            <CustomInputField label='Email Address'/>
            <CustomInputField label='Password' isSecure={true}/>
            <TouchableWithoutFeedback>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableWithoutFeedback>
            <MainThemeBtn value='Log In'/>

        </View>
    )
}

function CustomInputField({label, isSecure}) {
    return (
        <View style={{ marginBottom: 36 }}>
            <InputField label={label} isSecure={isSecure}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 32,
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#3F3F3F'
    },

    forgotPassword: {
        color: '#F69B46',
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        marginBottom: 14
    }
})


