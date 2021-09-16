import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//pages
import SignupPicker from '../pages/signup_picker';
import CreateAccountForm from '../pages/crt_acct_form';

const Stack = createStackNavigator()

export default function CreateAcctStack() {
    return (
        <Stack.Navigator initialRouteName="CreateAcctForm" screenOptions={{
            headerShown: false
          }}>
              {/* //NOTE: signup form might have to get removed */}
            {/* <Stack.Screen name="SignupPicker" component={SignupPicker} /> */}
            <Stack.Screen name="CreateAcctForm" component={CreateAccountForm} />

        </Stack.Navigator>

    )
}
