import React from 'react'
import {
    TouchableWithoutFeedback,
    View
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddToCartButton() {
    return (
        <TouchableWithoutFeedback>
        <View style={{
            position: 'absolute',
            right: 20,
            bottom: 45,
            zIndex: 3,
            width: 74,
            height: 74,
          
            
        }}>
            <LinearGradient colors={['#FF8038', '#FF2828']} style={{
                borderRadius: 37,
                justifyContent: 'center',
                alignItems: 'center',
               width: '100%',
               height: '100%'
            }}>
                <FontAwesome5 name="cart-plus" size={24} color="white" />

            </LinearGradient>
        </View>
        </TouchableWithoutFeedback>
        
    
    )
}

