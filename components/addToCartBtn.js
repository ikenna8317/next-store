import React from 'react'
import {
    TouchableWithoutFeedback,
    View,
    ToastAndroid

} from 'react-native'

import {
    gl_addToCart, 
} from '../redux_side/action_creators'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddToCartButton({ dispatch, productContext, itemInCart }) {
    const onPress = () => {
        // console.log('add-to-cart-btn pressed')
        if (itemInCart) {
            ToastAndroid.show('This item is already in your shopping cart', ToastAndroid.SHORT)
            return
        }
       dispatch(gl_addToCart(productContext))
       ToastAndroid.show('Item added to cart', ToastAndroid.SHORT)
    }

    return (
        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View style={{
                position: 'absolute',
                right: 20,
                bottom: 45,
                zIndex: 3,
                width: 74,
                height: 74,
            
                
            }}>
                <LinearGradient colors={['#FF8038', '#FF2828']}
                start={[0, 1]}
                end={[1, 0]}
                 style={{
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

