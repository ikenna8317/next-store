import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    FlatList,
    // TouchableOpacity,
    TouchableHighlight
} from 'react-native'

import NavBar from '../components/navbar'
import ProductView from '../components/productview'
import { MaterialIcons } from '@expo/vector-icons';

import { gl_removeFromCart } from '../redux_side/action_creators'
import { connect } from 'react-redux'

//ALERT: using mock data, clean up after testing
function CartPage({ dispatch, cartItems }) {

    const onProductViewClose = (pid) => {
        dispatch(gl_removeFromCart(pid))
    }

    return (
        <View style={mainStyles.mainContainer}>
            <NavBar/>
            <View style={mainStyles.inner}>
                <FlatList
                        data={cartItems}
                        renderItem={
                            ({item}) => <ProductView
                            uri={item.uri}
                            name={item.name}
                            price={item.price}
                            optionalDetails={item.optionalDetails}
                            onClose={() => onProductViewClose(item.name)}/>
                        }
                        keyExtractor={item => item.name}
                        ListHeaderComponent={<Header numOfCartItems={cartItems.length}/>}
                        // contentContainerStyle={{ flexGrow: 1 }}
                    />
                <PayButton/>
                
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps)(CartPage)


function Header({ numOfCartItems }) {
    return (
        <Text style={mainStyles.header}>Your Shopping Cart ({numOfCartItems})</Text>
    )
}

function PayButton() {
    return (
        <TouchableHighlight onPress={() => console.log('pay btn clicked')}>
            <View style={mainStyles.payBtnWrapper}>
                <MaterialIcons name="payment" size={24} color="#141414" />
                <Text style={{color: '#141414', fontFamily: 'Roboto_500Medium', fontSize: 24, marginLeft: 12}}>PAY</Text>
            </View>
        </TouchableHighlight>
    )
}

const mainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#3F3F3F',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
       

    },

    inner: {
        flex: 1,
        // marginTop: 30,
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 11

    },

    header: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 24,
        color: 'white',
        marginBottom: 17

    },

    // cartItemsScroll: {
    //     // flex: 1
    // },

    payBtnWrapper: {
        alignSelf: 'flex-end',
        width: '100%',
    //    position: 'absolute',
    // //    top: 0,
    //    bottom: 0,
    //    borderWidth: 2,
    //    borderColor: 'black',
    //    left: 0,
    //    right: 0,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 6,
       paddingVertical: 12,
       backgroundColor: '#F58E2E',
       flexDirection: 'row'
       

    }

})
