import React, {useState} from 'react';
import { 
    Text, 
    View, 
    TextInput,
    StyleSheet
} from 'react-native'


export default function InputField({label, isSecure, dropdownList}) {
    const [input, onChangeInput] = useState(null)

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            {
                
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