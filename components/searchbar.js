import React, { useState } from 'react';
import {TextInput, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function SearchBar() {
    const [searchField, onChangeSearchField] = useState(null);

    return (
        <View style={{
            // flex: 1,
            width: '100%',
            flexDirection: 'row',
            paddingVertical: 19, 
            paddingHorizontal: 25,
            borderRadius: 21,
            backgroundColor: '#ededed',
            justifyContent: 'space-around'
    
        }}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
            style={{
                fontSize: 18,
               
                
            }}
            placeholder="Search by ID, category or date"
            // placeholderTextColor="#4A4A4A"
            onChangeText={onChangeSearchField}
            value={searchField}
            />
        </View>
    );
}