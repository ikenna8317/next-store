import React, {useState} from 'react'
import {
     SectionList,
     FlatList,
     Button,
     RefreshControl,
     View,
     StyleSheet,
     Text,
     Image,
     TouchableOpacity
} from 'react-native'

import { doc, getDoc } from "firebase/firestore";
import { db } from '../config'
import { useNavigation } from '@react-navigation/native';



export default function ProductCategorySect({data}) {

    const [isRefreshing, setIsRefreshing] = useState(false)
    
    // const testCall = async () => {
    //     const docRef = doc(db, 'doors', 'sws-304')
    //     const docSnap = await getDoc(docRef)
    
    //     if (docSnap.exists()) {
    //         console.log(docSnap.data())
    //     } else {
    //         console.log('does not exist')
    //     }
    // }
    // testCall()
   
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
                renderItem={({item}) => <ProductSectionItem uri={item.uri} name={item.name} price={item.price} quantity={item.quantity}/>}
                />
            }
            renderSectionHeader={({section}) => (<Text style={styles.sectionHeader}>{section.title}</Text>)}
            >
                {/* <RefreshControl refreshing={isRefreshing} onRefresh={}/> */}
            </SectionList>
    )
}

function ProductSectionItem({uri, name, price, quantity}) {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('ProductPage', { uri, name, price, quantity })
    }

    return (
        // 
        <TouchableOpacity onPress={() => onPress()}>
            <View style={{width: 185, marginRight: 22}}>
                <Image source={{uri: uri}} style={{width: '100%', height: 134}}/>
                <View style={{ paddingLeft: 4, paddingBottom: 12}}>
                    <Text style={{fontFamily: 'OpenSans_400Regular', fontSize: 10, color: '#E2E2E2'}}>{name}</Text>
                    <Text style={{fontFamily: 'OpenSans_400Regular', fontSize: 10, color: '#E2E2E2', fontWeight: 'bold'}}>₦{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    
    );
}

const styles = StyleSheet.create({
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
})