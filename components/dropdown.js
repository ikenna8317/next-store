import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import ModalDropdown from 'react-native-modal-dropdown';


export default function Dropdown({ label, options }) {
    return (
        <ModalDropdown
         options={options} 
         style={styles.main} 
         dropdownStyle={styles.dropdownList}
         dropdownTextStyle={styles.dropdownListText}
         dropdownTextHighlightStyle={styles.dropdownHighlightedListText}
         >
            <View style={{ flexDirection: 'row' }}>
                <AntDesign name="down" size={19} color="white" />
                <Text style={styles.mainText}>{label}</Text>
            </View>
        </ModalDropdown>
    )
}

const styles = StyleSheet.create({
    main: {
        alignSelf: 'flex-start',
        backgroundColor: '#272727',
        flexDirection: 'row',    
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 12,
        // marginTop: 11
    },

    mainText: {
        marginLeft: 7,
        color: 'rgba(205, 205, 205, 0.38)',
    },

    dropdownList: {
        backgroundColor: '#212121'
    },

    dropdownListText: {
        color: '#6b6b6b',
        backgroundColor: '#212121',
        fontSize: 17,
        fontFamily: 'Roboto_400Regular'
    },

    dropdownHighlightedListText: {
        color: 'white'
    }
})