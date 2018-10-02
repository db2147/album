 /* eslint-disable eol-last */
 
 // Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';  // importing our Header component 
import AlbumList from './src/components/AlbumList';

 // Create a component
const App = () => (  // passing in one style directly 
    <View style={{ flex: 1 }}> 
        <Header headerText={'Albums'} /> 
        <AlbumList />
    </View> 
    );

 // Render it to the device
 AppRegistry.registerComponent('albums', () => App); 