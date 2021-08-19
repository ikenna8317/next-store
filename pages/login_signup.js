import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  StatusBar
 } from 'react-native';
import TermsAndConditions from '../components/terms_and_conditions';
import Copyright from '../components/copyright';
import OverlaySVG from '../assets/svg/svg-overlay.svg';
import AddUserSVG from '../assets/svg/undraw_Add_user_re_5oib.svg';

export default function LoginSignup({ navigation }) {

    return (
        <View style={styles.container}>
          
    <View style={styles.upper}>
        
      <View style={styles.overlaysvg}>
        <OverlaySVG width="100%"/>
      </View>
      <View style={styles.adduser}>
        <AddUserSVG width="100%" fill="#ff8b37"/>
      </View>
      <TouchableWithoutFeedback >
          <Text style={styles.skipbtn}>Skip</Text>
        </TouchableWithoutFeedback>
    </View>
    <View style={styles.bottomDiv}>
      
        <TouchableOpacity style={styles.createacctBtn} onPress={() => navigation.navigate('CreateAcctStack')}>
          <Text style={styles.createacctBtnText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>

        
        <View style={{position: 'absolute', bottom: 0, alignItems: 'center'}}>
          <TermsAndConditions style={{fontSize: 9}}/>
          <Copyright style={{fontSize: 9}}/>
        </View>
    
    </View>
  </View>
    )
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      fontSize: 12,
      fontFamily: 'OpenSans_400Regular',
      backgroundColor: '#3F3F3F'
    },

    skipbtn: {
      position: 'absolute', 
      top: StatusBar.currentHeight,
      right: 7,
      color: 'black',
      alignItems: 'flex-start'
    },

    overlaysvg: {
      // flex: 1
    },
  
    adduser: {
      position: 'absolute',
      width: '100%',
      flex: 1,
      alignItems: 'center'
    },
  
    bottomDiv: {
      flex: 1,
      position: 'relative',
      paddingHorizontal: 12,
      paddingTop: 21,
      alignItems: 'center',
     
    },
  
    createacctBtn: {
      paddingHorizontal: 45,
      paddingVertical: 18,
      backgroundColor: '#EAA63F',
      borderRadius: 37
    },
  
    createacctBtnText: {
      
      color: 'black'
    },
  
    loginBtn: {
      backgroundColor: 'transparent',
      borderWidth: 3,
      borderColor: '#EAA63F',
      paddingHorizontal: 64,
      paddingVertical: 18,
      borderRadius: 37,
      alignItems: 'center',
      marginTop: 14
    },
  
    loginBtnText: {
      color: '#EAA63F'
  
    },
  
    termsAndConditions: {
      position: 'absolute',
      // bottom: 12
    }
  
  });
  

