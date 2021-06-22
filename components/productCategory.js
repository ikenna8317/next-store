import React from 'react'
import {
     SectionList,
     FlatList,
     View,
     StyleSheet,
     Text,
     Image
} from 'react-native'


export default function ProductCategorySect({data}) {
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