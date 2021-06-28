import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function ProductView({ uri, name, price, quantity, optionalDetails, onClose }) {

    const navigation = useNavigation()
    navigation.navigate('ProductPage', { uri, name, price, quantity })
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductPage', { uri, name, price, quantity })}>
            <View style={styles.viewContainer}>
                <TouchableWithoutFeedback onPress={() => onClose()}>
                    <View style={styles.closeBtn}>
                        <EvilIcons name="close" size={24} color="red" />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.imgWrapper}>
                    <Image style={{width: '100%', height: '100%'}} source={{uri: uri}}/>
                </View>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDetailsName}>{name}</Text>
                    <Text style={styles.itemDetailsPrice}>₦{price}</Text>
                    { optionalDetails ? <Text>{optionalDetails}</Text> : null }

                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        height: 130,
        marginBottom: 18
    },

    closeBtn: {
        position: 'absolute',
        zIndex: 3,
        top: 5,
        right: 5
    },

    imgWrapper: {
        flex: 1
    },

    itemDetails: {
        flex: 2,
        backgroundColor: '#212121',
        padding: 6
    },

    itemDetailsName: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: 'white'

    },

    itemDetailsPrice: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: 'white',

    }
})