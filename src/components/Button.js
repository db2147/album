/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => { // destructures style property
    const { buttonStyle, textStyle } = styles;

    return ( // passed in our destructured style property
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
              {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: { // style property for the button text
            alignSelf: 'center',
            color: '#007aff',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
    },
    buttonStyle: { // style property for button layout
       flex: 1,
       alignSelf: 'stretch',
       backgroundColor: '#fff',
       borderRadius: 5,
       borderWidth: 1,
       borderColor: '#007aff',
       marginLeft: 5,
       marginRight: 5
    }
};

export default Button;