import React from 'react'
import { 
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'

export default function MainThemeBtn({value}) {
    return (
        <TouchableWithoutFeedback onPress={() => console.log('action btn clicked')}>
            <View style={styles.mainWrapper}>
                <Text style={{color: '#141414', fontFamily: 'Roboto_500Medium', fontSize: 24, marginLeft: 12}}>{value}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        alignSelf: 'flex-end',
        width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 6,
       paddingVertical: 12,
       backgroundColor: '#F58E2E',
       flexDirection: 'row'
    },


})
