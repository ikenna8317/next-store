import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
// import { Button } from '@material-ui/core/Button';
// import LoginSignupPage from './pages/login_signup.js';
import LoginSignupPage from './pages/login_signup';


const Stack = createStackNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({OpenSans_400Regular});

  const navigationOptions = {
    headerMode: 'none'
  }

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login-Signup" component={LoginSignupPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
}

