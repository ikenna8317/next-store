import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

function MainThemeBtn({value, onPress}) {
    return (
        <View style={styles.mainWrapper}>
            <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => onPress()}>   
                <Text style={{color: '#141414', fontFamily: 'Roboto_500Medium', fontSize: 15}}>{value}</Text>
            </TouchableOpacity>
        </View>

    )
}

function SecondaryThemeBtn({value, onPress}) {
    return (       
        <View style={styles.secBtnWrapper}>
            <TouchableHighlight style={{ width: '100%', alignItems: 'center' }} onPress={() => onPress()}>
                <Text style={{color: 'white', fontFamily: 'Roboto_500Medium', fontSize: 15}}>{value}</Text>
            </TouchableHighlight>
        </View>     
    )
}

export { MainThemeBtn, SecondaryThemeBtn }

const styles = StyleSheet.create({
    mainWrapper: {
        // alignSelf: 'flex-end',
        // width: '100%',
        flex: 3,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 6,
       paddingVertical: 12,
       backgroundColor: '#F58E2E',
       flexDirection: 'row',
    //    paddingHorizontal: 38
    },

    secBtnWrapper: {
        flex: 2,
        justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 6,
       paddingVertical: 12,
       backgroundColor: 'black',
       flexDirection: 'row',
    //    paddingHorizontal: 22

    }


})
