import React from 'react'
import {
    View,
    Text,
    // StatusBar,
    // Platform,
    FlatList,
    StyleSheet
} from 'react-native'

import { gl_removeFromFavorites } from '../redux_side/action_creators'
import NavBar from '../components/navbar'
import ProductView from '../components/productview'
import { connect } from 'react-redux'


function FavoritesPage({ dispatch, favItems }) {

    const onProductViewClose = (pid) => {
        dispatch(gl_removeFromFavorites(pid))
    }

    return (
        <View style={styles.mainContainer}>
            <NavBar/>
            <View style={styles.inner}>
                <FlatList
                            data={favItems}
                            renderItem={
                                ({item}) => <ProductView
                                uri={item.uri}
                                name={item.name}
                                price={item.price}
                                optionalDetails={item.optionalDetails}
                                onClose={onProductViewClose(item.name)}/>
                            }
                            keyExtractor={item => item.name}
                            ListHeaderComponent={<Header/>}
                            ListHeaderComponentStyle={{marginTop: 10}}
                            // contentContainerStyle={{ flexGrow: 1 }}
                        />
            </View>

        </View>
    )
}

const mapStateToProps = state => ({
    favItems: state.favItems
})

export default connect(mapStateToProps)(FavoritesPage)

function Header() {
    return (
       <View style={styles.headerContainer}>
           <Text style={styles.headerText}>You can add products here that you don’t want to purchase at the moment but would like to consider in the future</Text>
       </View> 
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#3f3f3f',
        flex: 1,
        position: 'relative',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    inner: {
        flex: 1,
        // marginTop: 30,
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 11

    },

    headerContainer: {
        backgroundColor: '#212121',
        paddingVertical: 17,
        paddingHorizontal: 9,
        borderRadius: 7
    },

    headerText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#fff'

    }
})

