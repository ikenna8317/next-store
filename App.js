import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import { firebase } from './config'

import AppLoading from 'expo-app-loading';
import { connect } from 'react-redux'
import  rootReducer  from './redux_side/reducers';
import { gl_updateUserCred } from './redux_side/action_creators';
import { useFonts, OpenSans_400Regular, OpenSans_300Light, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import { Roboto_400Regular,  Roboto_500Medium } from '@expo-google-fonts/roboto';

// Root app navigation pages and navs
import DrawerNav from './navs/drawerNav'
import LoginSignup from './pages/login_signup';
import ProductPage from './pages/product'
import Login from './pages/login'
import CreateAcctStack from './navs/createAcctStack';

// import {decode, encode} from 'base-64'
// if (!global.btoa) {  global.btoa = encode }
// if (!global.atob) { global.atob = decode }

const globalInitState = {
  searchQuery: null,
  userCred: null,
  cartItems: [],
  favItems: [],
  
}


const store = createStore(rootReducer, globalInitState);

const Stack = createStackNavigator()


function AppContent({ dispatch, userCred }) {

  let [fontsLoaded] = useFonts({OpenSans_400Regular, OpenSans_600SemiBold, Roboto_400Regular,  Roboto_500Medium, OpenSans_300Light});

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users');
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then(document => {
  //           const userData = document.data()           
  //           dispatch(gl_updateUserCred(userData))
  //         })
  //         .catch((error) => {
  //           alert(error)
  //         });
  //     }
  //   });
  // }, [])

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  else {
    return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginSignup" screenOptions={{
              title: null,
              headerStyle: {
              backgroundColor: '#5E5E5E',
            },
            headerTintColor: '#e3e3e3',
            }}>
                {
                  /*
                  take the user to the main app drawer nav if already authenticated,
                   else redirect them to the login-signup picker screen
                   */
                  userCred ? (
                    <Stack.Screen name="DrawerNav" component={DrawerNav} options={{
                      headerShown: false
                    }}/>
                   
                  ) : (
                    <Stack.Screen name="LoginSignup" component={LoginSignup} options={{
                      headerShown: false
                    }}/>
                  )
                }
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="CreateAcctStack" component={CreateAcctStack}/>

                <Stack.Screen name="ProductPage" component={ProductPage}/>
            </Stack.Navigator>
          </NavigationContainer>
       
    );
  }
}

const mapStateToProps = state => ({
    userCred: state.userCred
})

const ReduxApp = connect(mapStateToProps)(AppContent)

export default function App() {
    return (
      <Provider store={store}>
        <ReduxApp/>
      </Provider>
    )
}

// headerLeft: ({navigation}) => (
//   <TouchableOpacity style={{marginLeft: 12}} onPress={() => navigation.openDrawer()}>
//       <Feather name="menu" size={24} color="#E3E3E3" />
//   </TouchableOpacity>
// )
