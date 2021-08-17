import React from 'react';
import { 
    createDrawerNavigator,
     DrawerContentScrollView,
    DrawerItemList,
 } from '@react-navigation/drawer'
 import { AntDesign } from '@expo/vector-icons'; 
 import { EvilIcons } from '@expo/vector-icons';
 import { MaterialIcons } from '@expo/vector-icons';
 import { 
    Dimensions,
     TouchableOpacity,
     View
     } from 'react-native'


import Home from '../pages/home';
import CartPage from '../pages/cart'
import FavoritesPage from '../pages/favorites'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
         initialRouteName="Home"
         drawerType={Dimensions.get('window').width >= 768 ? 'permanent' : 'front'}
         backBehavior="history"
         drawerStyle={{
             backgroundColor: '#212121',
            //  width: {(Dimensions.get('window').width >= 768 ? )}
         }}
         drawerContent={props => <CustomDrawerComponent {...props}/>}
         drawerContentOptions={{
             activeTintColor: '#ff7b29',
             inactiveTintColor: '#cccccc',
         }}
    
         >
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon: ({ size }) => (
                    <AntDesign name="home" size={size} color="#e3e3e3" />
                )
            }}/>
            <Drawer.Screen name="Cart" component={CartPage} options={{
                drawerIcon: ({ size }) => (
                    <AntDesign name="shoppingcart" size={size} color="#e3e3e3" />
                )
            }}/>
            <Drawer.Screen name="Favorites" component={FavoritesPage} options={{
                drawerIcon: ({ size }) => (
                    <MaterialIcons name="favorite-border" size={24} color="#e3e3e3" />
                )
            }}/>
            
        </Drawer.Navigator>

    )
}

function CustomDrawerComponent(props) {
    return (
        <DrawerContentScrollView style={{
            // paddingTop: 14,
            
        }} {...props}>
         <TouchableOpacity style={{
            //  position: 'absolute',
             top: 5,
             left: 5,
            
         }}
         onPress={() => props.navigation.closeDrawer()}>
            <EvilIcons name="close" size={36} color="#ff2d29" />
         </TouchableOpacity>

          <View style={{
              marginTop: 18
          }}><DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
      )
}