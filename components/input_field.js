import React, {useState, useEffect} from 'react';
import { 
    Text, 
    View, 
    TextInput,
    StyleSheet
} from 'react-native'

import Dropdown from './dropdown';


export default function InputField({label, isSecure, callback, dropdownLabel, dropdownList}) {
    const [input, onChangeInput] = useState(null)

    useEffect(() => callback(input), [input])

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            {
                dropdownLabel ?
                <CustomDropdown label={dropdownLabel} options={dropdownList}/> : null
            }
            <TextInput
            style={styles.input}
            value={input}
            onChangeText={onChangeInput}
            secureTextEntry={isSecure}
            />
        </View>
    )
}

function CustomDropdown({label, options}) {
    return (
        <View style={{marginLeft: 7, marginBottom: 11}}>
            <Dropdown label={label} options={options}/>
        </View>
    )
}


const styles = StyleSheet.create({

    label: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Roboto_400Regular',
        marginBottom: 11
    },

    input: {
        borderWidth: 2,
        borderColor: '#ECECEC',
        borderRadius: 6,
        padding: 7,
        fontSize: 17,
        fontFamily: 'Roboto_400Regular',
        color: '#BDBDBD',

    }

})