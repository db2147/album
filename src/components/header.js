/* eslint-disable eol-last */

// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native'; // importing the text component from react-native

// Make a component
const Header = (props) => { // passing in the props argument to our function
    const { textStyle, viewStyle } = styles; // passing props in

    return ( 
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text> 
    </View>
    );  
};

const styles = { // created a const to define styles we will use in our components
    viewStyle: {
        backgroundColor: '#F8F8F8', // off white color
        justifyContent: 'center', // positioning on the vertical axis
        alignItems: 'center',     // positioning on the horizontal axis with flexbox
        height: 60,  // designating the height of the container element with flexbox
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: { // specifically for the size of the Albums text
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export default Header;