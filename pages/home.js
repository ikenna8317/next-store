import React from 'react';
import {
    View,
    FlatList, 
    TouchableOpacity,
    StyleSheet, 
    Text, 
    Image, 
    
} from 'react-native';
// import { StatusBar } from 'expo-status-bar'

import { db } from '../config'
import { connect } from 'react-redux';
import { gl_setSearchQuery } from '../redux_side/action_creators';

// import { gl_setFocusedProduct } from '../redux_side/action_creators'
import { useNavigation } from '@react-navigation/native';

import  { mockData, mockSections } from '../mockdata'

import NavBar from '../components/navbar.js';
import SearchBar from '../components/searchbar.js';
import ProductCategorySect from '../components/productCategory.js';
import Logo from '../assets/svg/NEXT.svg';

import { Ionicons } from '@expo/vector-icons';

//Rule for images within VirtualizedLists i.e. SectionLists, FlatLists, ...
// is that their width should be [(width of image in design / width of phone frame in design) * 100] percent to accomodate for as much screen size as possible
// const {screenWidth, screenHeight} = Dimensions.get('window');


//fetch data here


function Home({ dispatch, searchQuery }) {
    
    //TODO: reprogram this variable
    // const [inQueryMode, setHasQueried] = useState(false);
    

    return (
        //contentContainerStyle={["alignItems"]}
        <View style={styles.container} >

            {/* <ExpoStatusBar style="light"/> */}
            
            <NavBar withHomeIcon={false} withAccountBtn={true}/>
            <View style={styles.inner}>
                <View style={styles.logoWrapper}>
                    <Logo width="100%"/>
                </View>
                
                <SearchBar/>
            </View>
           
            {
                searchQuery ? 
                <View>
                    <TouchableOpacity onPress={() => dispatch(gl_setSearchQuery(null))} style={{ flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 6, alignSelf: 'center', backgroundColor: '#141414'}}>
                        <Ionicons name="return-up-back" size={24} color="white" />
                        <Text style={{ color: 'white', marginLeft: 2 }}>Return to product categories</Text>
                    </TouchableOpacity>
                    <SearchResults searchQuery={searchQuery} searchRes={mockData}/>
                </View>
                 
                : 
                
                <ProductCategorySect data={mockSections}/>
            }

        </View>
    );
    
}

const mapStateToProps = state => ({
    searchQuery: state.searchQuery
})

export default connect(mapStateToProps)(Home)


{/* <View style={styles.searchResGridView}>
           {
               data.map((item) => <SRGridItem uri={item.uri} name={item.name}/>)
           }
       </View> */}

function SRGrid({data, dispatch}) {
    return (
       <FlatList
       style={styles.searchResFlatGrid}
       data={data}
       renderItem={({item}) => <SRGridItem uri={item.uri} name={item.name} price={item.price} quantity={item.quantity} dispatch={dispatch}/>}
       columnWrapperStyle={styles.searchResFlatGridRow}
       numColumns={2}/>

    )
}

function SRGridItem({ uri, name, price, quantity}) {
    //marginHorizontal: 23, width: `${SRGridImageWidthPercent}%`

    const navigation = useNavigation();
    let stillInStock = true;
    if (quantity <= 0) {
        stillInStock = false;
    }

    const onPress = () => {
        // dispatch(gl_setFocusedProduct({ uri, name, price, quantity }))
        navigation.navigate('ProductPage', { uri, name, price, quantity });
    }

    return (
        <TouchableOpacity style={{ width: '49%', marginBottom: 12}} onPress={() => onPress()}>
            <Image source={{uri: uri}} style={{width: '100%', height: 180}}/>
            {/* <Text style={{backgroundColor: '#242424', paddingHorizontal: 24, paddingVertical: 6}}>{name}</Text> */}
            <View style={{backgroundColor: '#232323', padding: 5}}>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, color: '#E5E5E5'}}>{name}</Text>
                <Text style={{fontFamily: 'Roboto_500Medium', color: '#5FFF37', fontSize: 16}}>₦{price}</Text>
                <Text style={{fontFamily: 'OpenSans_300Light', color: '#E5E5E5', fontSize: 10, marginTop: 8}}>{
                 stillInStock ? (<Text><Text style={{fontWeight: 'bold'}}>{quantity}</Text> STILL IN STOCK</Text>) : '⚠️ OUT OF STOCK'}
                 </Text>
            </View>
        </TouchableOpacity>
    );
}

function SearchResults({searchQuery, searchRes, dispatch}) {

    const doorsRef = db.collection('doors')

    return (
        <View style={styles.searchResContainer}>
            <View style={{alignItems: 'center', marginBottom: 21}}>
                <Text style={{color: '#CDCDCD', fontSize: 18, fontFamily: 'Roboto_400Regular'}}>[Recommended] Search results for:</Text>
                <Text style={{color: 'white', fontSize: 18, fontFamily: 'Roboto_500Medium'}}>{searchQuery}</Text>
            </View>
            <SRGrid data={searchRes} dispatch={dispatch}/>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'OpenSans_400Regular',
        // justifyContent: 'center',
        alignItems: 'center',
       
        backgroundColor: '#3F3F3F',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    },

    inner: {
        width: '100%',
        paddingHorizontal: 25,
        
    },

    logoWrapper: {
        marginTop: 70,
        marginBottom: 27
    },

   

    searchResContainer: {
        // marginTop: 32,
        flex: 1,
        // alignItems: 'center',
        width: '100%',
        marginTop: 15

    },

    // searchResGrid: {
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     borderColor: 'white',
    //     borderWidth: 1
    // },

    searchResFlatGrid: {

    },

    searchResFlatGridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    searchresGridItem: {

    }
    
});