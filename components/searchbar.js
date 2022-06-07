import React, { useState } from 'react';
import { connect } from 'react-redux';
import { gl_setSearchQuery } from '../redux_side/action_creators';

import {
    TextInput,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function SearchBar({ dispatch }) {
    const [userInput, setUserInput] = useState(null);
  

    const onSubmit = () => {
        dispatch(gl_setSearchQuery(userInput))
    }


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
            <TouchableWithoutFeedback onPress={() => onSubmit()}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableWithoutFeedback>
            <TextInput
            style={{
                fontSize: 18,      
            }}
            placeholder="Search by name, category or ID"
            onSubmitEditing={() => onSubmit()}
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

