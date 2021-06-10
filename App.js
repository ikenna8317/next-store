import 'react-native-gesture-handler';
import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppLoading from 'expo-app-loading';
import  rootReducer  from './redux_side/reducers';
import { useFonts, OpenSans_400Regular, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import { Roboto_400Regular,  Roboto_500Medium } from '@expo-google-fonts/roboto';
// import { Button } from '@material-ui/core/Button';
// import LoginSignupPage from './pages/login_signup.js';
// import LoginSignupPage from './pages/login_signup';
import HomePage from './pages/home';

const initialState = {
  searchQuery: null
}


const store = createStore(rootReducer, initialState);
const Stack = createStackNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({OpenSans_400Regular, Roboto_400Regular,  Roboto_500Medium, OpenSans_300Light});

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  

  else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Login-Signup" component={LoginSignupPage} options={{headerShown: false}}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}
}

