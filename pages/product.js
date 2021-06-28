import React, { useState, useEffect } from 'react'
import { 
    View,
    Image,
    Text,
    Platform, 
    StatusBar, 
    TouchableOpacity,
    ScrollView
 } from 'react-native'
//  import { DrawerActions } from 'react-navigation'
//  import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import ModalDropdown from 'react-native-modal-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { mockSections } from '../mockdata'

import { 
    gl_addToFavorites, 
    gl_removeFromFavorites, 
 } from '../redux_side/action_creators'

// import { connect } from 'react-redux';
import ProductCategorySect from '../components/productCategory'
import AddToCartButton from '../components/addToCartBtn';
import NavBar from '../components/navbar'
import { connect } from 'react-redux';


function ProductPage({ dispatch, route, cartItems }) {
    const { uri, name, price, quantity } = route.params

    let itemInCart = false

    //find out if the current item is already in the shopping cart
    if (cartItems.map(item => item.name).indexOf(name) !== -1) {
        itemInCart = true
    }

    return (
        <View style={{flex: 1}}>
                {/* <ExpoStatusBar style="light"/> */}
            <ScrollView style={styles.mainContainer}>
            <NavBar/>

                <View style={styles.imgContainer}>
                    <Image source={{uri: uri}} style={{width: '100%', height: '100%'}}/>

                </View>
                <View style={styles.inner}>
                    <Text style={styles.productName}>{name}</Text>
                    <AddToFavoritesButton dispatch={dispatch} pid={name} productContext={{uri, name, price}}/>

                    <View style={{flex: 1, paddingVertical: 19, borderTopWidth: 1, borderBottomWidth: 1, marginVertical: 27, borderColor: '#8D8D8D'}}>
                        {/* <Text>Seller: </Text> */}
                        <Text style={styles.productDetailField}>Price: <Text style={{color: '#BBFF4B', fontFamily: 'Roboto_400Regular'}}>₦{price}</Text></Text>
                        <Text style={styles.productDetailField}>QTY left: <Text style={{fontFamily: 'Roboto_400Regular'}}>{quantity}</Text></Text>

                        {/* <Text>Phone: </Text> */}

                    </View>

                    <Text style={{fontFamily: 'OpenSans_400Regular', color: '#CACACA', fontSize: 14}}>How would you like to pay and receive your product ?</Text>
                    <ModalDropdown options={['shipping', 'visit seller']}>
                    <View style={styles.dropdown}>
                            <AntDesign name="down" size={19} color="white" />
                            <Text style={styles.dropdownText}>Select a preference</Text>
                    </View>
                    </ModalDropdown>
                </View>
                <ProductCategorySect data={mockSections}/>

                
            </ScrollView>
            <AddToCartButton dispatch={dispatch} productContext={{uri, name, price, quantity}} itemInCart={itemInCart}/>

        </View>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps)(ProductPage)


function AddToFavoritesButton({ dispatch, pid, productContext }) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (!active) {
            dispatch(gl_removeFromFavorites(pid))
        } else {
            dispatch(gl_addToFavorites(productContext))
        }
    }, [active])

    return (
        <TouchableOpacity style={styles.addFavBtn} onPress={() => setActive(!active)}>
            <View style={styles.addFavBtnInner}>
                { active ? <MaterialIcons name="favorite" size={24} color="#FF4487" /> : <MaterialIcons name="favorite-outline" size={24} color="#FF4487" /> }
                <Text style={{color: '#cecece', fontFamily: 'OpenSans_400Regular', marginLeft: 8, fontSize: 16}}>Add to Favorites</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    mainContainer: {
        // height: '100%', 
        borderColor: 'green',
        borderWidth: 2,
       backgroundColor: '#3F3F3F',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 

    },

    imgContainer: {
        width: '100%',
        height: 300,
        borderWidth: 1, 
        borderColor: 'black'

    },

    inner: {
        paddingHorizontal: 12,
        paddingVertical: 19
    },

    productName: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 21,
        color: '#e5e5e5',
        marginBottom: 12

    },

    addFavBtn: {
        alignSelf: 'flex-start',
        paddingVertical: 9,
        paddingHorizontal: 11,
        borderRadius: 6,
        // padding: 12,
        backgroundColor: '#272727',
        // flexWrap: 'wrap'

    },

    addFavBtnInner: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    productDetailField: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 18,
        color: '#D6D6D6',
        // marginVertical: 5
    },

    dropdown: {
        alignSelf: 'flex-start',
        backgroundColor: '#272727',
        flexDirection: 'row',    
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 11
    },

    dropdownText: {
        marginLeft: 7,
        color: 'rgba(205, 205, 205, 0.38)',
    }
}

//Remember to connect to redux store later
// export default connect()