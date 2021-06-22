import React, { useState } from 'react';
import {View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function NavBar({withHomeIcon, withAccountBtn}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={{
        //  position: 'absolute',
         zIndex: 3,
        //  top: 0,
          width: '100%',
         flexDirection: 'row',
          paddingHorizontal: 11,
          paddingVertical: 11,
          backgroundColor: '#5E5E5E',
          
         }}>
            <TouchableOpacity style={{marginRight: 22}} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color="#E3E3E3" />
            </TouchableOpacity>
            { withHomeIcon ? <AntDesign name="home" size={24} color="#E3E3E3" /> : null }
            { withAccountBtn ? <AccountButton loggedIn={loggedIn} /> : null }
        </View>
    );
}

//TODO: implement login user image on account button functionality
function AccountButton({loggedIn}) {
    return (
        <View style={{
            position: 'absolute', 
            top: 22, 
            right: 30, 
            paddingVertical: 19, //22 
            paddingHorizontal: 20, //25 
            backgroundColor: '#5E5E5E', 
            borderRadius: 50, 
            borderWidth: 2, 
            borderColor: '#e3e3e3'
        }}>
            { loggedIn ? null : <AntDesign name="user" size={24} color="#E3E3E3" /> }
        </View>
    );
}