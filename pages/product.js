import React, { useState } from 'react'
import { 
    View,
    Image,
    Text,
    Platform, 
    StatusBar, 
    TouchableOpacity,
    ScrollView
 } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { connect } from 'react-redux';
import ProductCategorySect from '../components/productCategory'
import AddToCartButton from '../components/addToCartBtn';


import NavBar from '../components/navbar'

const mockSections = [
    {
        title: 'Sponsored',
        data: [
            [
                {
                    uri: 'https://isdturkishdoors.com/wp-content/uploads/2019/05/SWS-302-Yarim-Kanat-Kisa-copy-300x300.jpg',
                    name:  'SWS-302',
                    price: 43.29
    
                },
                {
                    uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-305-Tek-Kanat-copy.jpg',
                    name:  'SWS-305',
                    price: 37.60
    
                },
                {
                    uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-311-Yarim-Kanat-Kisa-copy.jpg',
                    name:  'SWS-311',
                    price: 59.99
    
                },
                {
                    uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-305-Tek-Kanat-copy.jpg',
                    name:  'SWS-305',
                    price: 37.60
    
                },
                {
                    uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-311-Yarim-Kanat-Kisa-copy.jpg',
                    name:  'SWS-311',
                    price: 59.99
    
                }
            ]
        ]
    }]

export default function ProductPage({ route }) {
    const { uri, name, price, quantity } = route.params

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.mainContainer}>
                <NavBar/>
                <View style={styles.imgContainer}>
                    <Image source={{uri: uri}} style={{width: '100%', height: '100%'}}/>

                </View>
                <View style={styles.inner}>
                    <Text style={styles.productName}>{name}</Text>
                    <AddToFavoritesButton/>

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
            <AddToCartButton/>

        </View>
    )
}

function AddToFavoritesButton() {
    const [active, setActive] = useState(false)

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