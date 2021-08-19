import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function SignupPicker() {
    return (
        <View style={styles.main}>
           <View style={{ marginBottom: 34 }}>
            <Text style={styles.text}>
                    You’ll need to create a verified account to be able to buy products,
                    use coupons, receive offers and even participate in affiliate marketing
                </Text>
           </View>
            <Text style={text2Style}>Please select an option</Text>
        </View>
    )
}

function ThirdPartyPickerButton({icon, label}) {
    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: '100%',
        padding: 30,
        backgroundColor: '#3F3F3F'
    },

    text: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        fontSize: 17
    },

    text2: {
        fontSize: 15
    }
})

const text2Style =  StyleSheet.compose(styles.text, styles.text2)