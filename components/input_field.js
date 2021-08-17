import React, {useState} from 'react';
import { 
    Text, 
    View, 
    TextInput,
    StyleSheet
} from 'react-native'


// Custom Input field

export default function InputField({label, isSecure}) {
    const [input, onChangeInput] = useState(null)

    return (
        <View style={styles.main}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input}
            value={input}
            onChangeText={onChangeInput}
            // secureTextEntry={true}
            secureTextEntry={isSecure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 36
    },

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