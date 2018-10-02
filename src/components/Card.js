/* eslint-disable eol-last */
import React from 'react';
import { View } from 'react-native';

const Card = (props) => ( // parent component to CardSection
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );

const styles = { // passing in styles as a child prop above in component
    containerStyle: {
      borderWidth: 1, // put a border around it and give pixel width of 1
      borderRadius: 2, // gives rounded edges to all borders
      borderColor: '#ddd', // grey border around outside
      borderBottomWidth: 0, // hides the bottom border
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, // tells what side to put shadow
      shadowOpacity: 0.1, // lightens up the color
      shadowRaidus: 2, // just like border radius, it rounds off corners
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10 // for when we have a list to show space btwn 
    }
};

export default Card;