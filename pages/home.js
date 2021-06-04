import React from 'react';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';


import NavBar from '../components/navbar.js';
import SearchBar from '../components/searchbar.js';
import Logo from '../assets/svg/NEXT.svg';


export default function HomePage() {
    return (
        <View style={styles.container}>
            
            <NavBar withHomeIcon={false} withAccountBtn={true}/>
            <View style={styles.inner}>
                <View style={styles.logoWrapper}>
                    <Logo width="100%"/>
                </View>
                <SearchBar/>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       
        backgroundColor: '#3F3F3F',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    },

    inner: {
        width: '100%',
        paddingHorizontal: 25,
        
    },

    logoWrapper: {
        marginTop: 70,
        marginBottom: 27
    },

    
});