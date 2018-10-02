/* eslint-disable eol-last */

import React, { Component } from 'react'; // importing b/c we're creating class based component
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

 class AlbumList extends Component { // class based Component with state, 
    state = { albums: [] };

    componentWillMount() { // using lifecycle methods to fetch our api and return json  
         fetch('https://rallycoding.herokuapp.com/api/music_albums')
         .then((response) => response.json())
         .then((responseData) => this.setState({ albums: responseData }));   
    }  

    renderAlbums() { // method maps through the album array
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }


  render() { // rendering the beginning state: empty album object
    console.log(this.state);

    return ( // we need everything in this view to be scrollable
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
  }
} 

export default AlbumList;