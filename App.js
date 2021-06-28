import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


import AppLoading from 'expo-app-loading';
import  rootReducer  from './redux_side/reducers';
import { useFonts, OpenSans_400Regular, OpenSans_300Light, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import { Roboto_400Regular,  Roboto_500Medium } from '@expo-google-fonts/roboto';

import DrawerNav from './drawerNav'
import LoginSignup from './pages/login_signup';
import ProductPage from './pages/product'


const globalInitState = {
  searchQuery: null,
  userCred: null,
  cartItems: [],
  favItems: []
}


const store = createStore(rootReducer, globalInitState);

const Stack = createStackNavigator()


export default function App() {

  let [fontsLoaded] = useFonts({OpenSans_400Regular, OpenSans_600SemiBold, Roboto_400Regular,  Roboto_500Medium, OpenSans_300Light});

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  else {
    return (
      <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="DrawerNav" screenOptions={{headerShown: false}}>
              <Stack.Screen name="DrawerNav" component={DrawerNav}/>
              <Stack.Screen name="LoginSignup" component={LoginSignup}/>
              <Stack.Screen name="ProductPage" component={ProductPage}/>
            </Stack.Navigator>
          </NavigationContainer>
       
      </Provider>
    );
}
}

