/* eslint-disable eol-last */
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => ( // child component of Card
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );

const styles = { // our const holds the styles we import as child props above
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative' 
    }
};

export default CardSection; 