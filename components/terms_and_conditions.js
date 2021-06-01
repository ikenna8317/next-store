import React from 'react';
import {Linking, Text} from 'react-native';


/**
 * A reusable terms and conditions phrase containing hyperlinks to the official terms and services.
 * Note that this compo must be styled accordingly through external stylesheets instead of modifying this source code itself.
 * @constructor
 */
export default function TermsAndConditions() {
    return (
        <Text style={{color: '#c4c4c4'}}>
          By using this product, you agree to the 
          <Text style={{color: 'white', fontWeight: 'bold'}} onPress={() => Linking.openURL('http://example.com')}> terms </Text>
           and <Text style={{color: 'white', fontWeight: 'bold'}} onPress={() => Linking.openURL('http://example.com')}> conditions </Text>.
        </Text>
    );
}

