import React, { useState } from 'react';
import {View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

export default function NavBar({withHomeIcon, withAccountBtn}) {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <View style={{
         position: 'relative',
        //  top: 0,
          width: '100%',
         flexDirection: 'row',
          paddingHorizontal: 11,
          paddingVertical: 11,
          backgroundColor: '#5E5E5E',
          
         }}>
            <View style={{marginRight: 22}}>
                <Feather name="menu" size={24} color="#E3E3E3" />
            </View>
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