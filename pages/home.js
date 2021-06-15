import React, {useState} from 'react';
import {
    View,
    FlatList, 
    TouchableOpacity,
    StyleSheet, 
    Platform, 
    StatusBar, 
    Text, 
    Image, 
    SectionList
} from 'react-native';
import { connect } from 'react-redux';


import NavBar from '../components/navbar.js';
import SearchBar from '../components/searchbar.js';
import Logo from '../assets/svg/NEXT.svg';

//Rule for images within VirtualizedLists i.e. SectionLists, FlatLists, ...
// is that their width should be [(width of image in design / width of phone frame in design) * 100] percent to accomodate for as much screen size as possible
// const {screenWidth, screenHeight} = Dimensions.get('window');

const mockSections = [
    {
        title: 'Most Popular',
        data: [
            [
                {
                    uri: 'https://th.bing.com/th/id/Ra95f374a80c6792a24bbecdce1a8112d?rik=6jqyUdxZv6Jtiw&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f10%2fWhale-Shark-Wallpapers-HD.jpg&ehk=DC%2f4QcXZyxGWSc1c5NQJSriD0AhJMx5kgnS7KGLuYlg%3d&risl=&pid=ImgRaw',
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
    },
    {
        title: 'Newest',
        data: [
            [
                {
                    uri: 'https://th.bing.com/th/id/Ra95f374a80c6792a24bbecdce1a8112d?rik=6jqyUdxZv6Jtiw&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f10%2fWhale-Shark-Wallpapers-HD.jpg&ehk=DC%2f4QcXZyxGWSc1c5NQJSriD0AhJMx5kgnS7KGLuYlg%3d&risl=&pid=ImgRaw',
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
    }
];
const mockData = [
    {
        uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-302-Cift-Kanat-Kisa-copy-300x300.jpg',
        name:  'SWS-302A',
        quantity: 19,
        price: 43211
    },

    {
        uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-305-Tek-Kanat-copy.jpg',
        name:  'SWS-305',
        quantity: 0,
        price: 35000
    },

    {
        uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-311-Yarim-Kanat-Kisa-copy.jpg',
        name:  'SWS-311',
        quantity: 3,
        price: 30611
    },

    {
        uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-303-Yarim-kanat-Kisa-copy-300x300.jpg',
        name: 'ST-02B',
        quantity: 10,
        price: 40411
    },

    {
        uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-305-Yarim-Kanat-Kisa-copy-300x300.jpg',
        name: 'SWS-305B',
        quantity: 1,
        price: 40411
    },

    {
        uri: 'https://swisstradezu.com/wp-content/uploads/2019/05/SWS-309-yarim-Kanat-copy-300x300.jpg',
        name: 'ST-309B',
        quantity: 10,
        price: 30000
    }
]

function Home({ searchQuery }) {
    
    const [hasQueried, setHasQueried] = useState(true);

    return (
        //contentContainerStyle={["alignItems"]}
        <View style={styles.container} >

            
            <NavBar withHomeIcon={false} withAccountBtn={true}/>
            <View style={styles.inner}>
                <View style={styles.logoWrapper}>
                    <Logo width="100%"/>
                </View>
                <SearchBar/>
            </View>
           
            {
                hasQueried ? <SearchResults searchQuery={searchQuery} searchRes={mockData}/> : <ProductCategorySect data={mockSections}/>
            }

        </View>
    );
    
}

const mapStateToProps = state => ({
    searchQuery: state.searchQuery
})

export default connect(mapStateToProps)(Home)



function ProductCategorySect({data}) {
    return (
        <SectionList
            sections={data}
            style={styles.sectionList}
            // keyExtractor={(item, index) => item.name}
            // <ProductSectionItem name={item.name} price={item.price}/>
            renderItem={
                ({item}) => 
                <FlatList
                data={item}
                horizontal={true}
                renderItem={({item}) => <ProductSectionItem uri={item.uri} name={item.name} price={item.price}/>}
                />
            }
            renderSectionHeader={({section}) => (<Text style={styles.sectionHeader}>{section.title}</Text>)}
            />
    )
}

function ProductSectionItem({uri, name, price}) {
    return (
        // 
    <View style={{width: 185, marginRight: 22}}>
        <Image source={{uri: uri}} style={{width: '100%', height: 134}}/>
        <View style={{backgroundColor: 'background: #2323238',  paddingLeft: 4, paddingBottom: 12}}>
            <Text style={{fontFamily: 'OpenSans_400Regular', fontSize: 10, color: '#E2E2E2'}}>{name}</Text>
            <Text style={{fontFamily: 'OpenSans_400Regular', fontSize: 10, color: '#E2E2E2', fontWeight: 'bold'}}>₦{price}</Text>
        </View>
    </View>
    );
}

{/* <View style={styles.searchResGridView}>
           {
               data.map((item) => <SRGridItem uri={item.uri} name={item.name}/>)
           }
       </View> */}

function SRGrid({data}) {
    return (
       <FlatList
       style={styles.searchResFlatGrid}
       data={data}
       renderItem={({item}) => <SRGridItem uri={item.uri} name={item.name} price={item.price} quantity={item.quantity}/>}
       columnWrapperStyle={styles.searchResFlatGridRow}
       numColumns={2}/>

    )
}

function SRGridItem({uri, name, price, quantity}) {
    //marginHorizontal: 23, width: `${SRGridImageWidthPercent}%`
    let stillInStock = true;
    if (quantity <= 0) {
        stillInStock = false;
    }

    return (
        <TouchableOpacity style={{ width: '49%', marginBottom: 12}}>
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

function SearchResults({searchQuery, searchRes}) {
    return (
        <View style={styles.searchResContainer}>
            <View style={{alignItems: 'center', marginBottom: 21}}>
                <Text style={{color: '#CDCDCD', fontSize: 18, fontFamily: 'Roboto_400Regular'}}>[Recommended] Search results for:</Text>
                <Text style={{color: 'white', fontSize: 18, fontFamily: 'Roboto_500Medium'}}>{searchQuery}</Text>
            </View>
            <SRGrid data={searchRes}/>
            
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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    },

    inner: {
        width: '100%',
        paddingHorizontal: 25,
        
    },

    logoWrapper: {
        marginTop: 70,
        marginBottom: 27
    },

    sectionList: {
        marginLeft: 25,
        marginTop: 57
    },

    sectionHeader: {
        width: 338,
        fontSize: 18,
        color: '#CDCDCD',
        paddingVertical: 21,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        marginBottom: 15
    },

    searchResContainer: {
        // marginTop: 32,
        flex: 1,
        // alignItems: 'center',
        width: '100%',
        marginTop: 33

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