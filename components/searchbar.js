import React, { useState } from 'react';
import { connect } from 'react-redux';
import { gl_setSearchQuery } from '../redux_side/action_creators';

import {TextInput, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function SearchBar({ dispatch }) {
    const [userInput, setUserInput] = useState(null);


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
            onSubmitEditing={() => dispatch(gl_setSearchQuery(userInput))}
            // placeholderTextColor="#4A4A4A"
            onChangeText={setUserInput}
            value={userInput}
            />
        </View>
    );
}

// const mapStateToProps = state => ({
//     searchQuery: state.searchQuery,
// });

export default connect()(SearchBar);

