/* eslint-disable eol-last */
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => { // destructuring album and styles
  const { title, artist, thumbnail_image, image, url } = album;
  const { 
    thumbnailStyle, 
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

    return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image 
              style={thumbnailStyle} 
              source={{ uri: thumbnail_image }} 
              />
            </View>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>

          <CardSection>
            <Image 
              style={imageStyle}
              source={{ uri: image }} 
            />
          </CardSection>
          
          <CardSection > 
            <Button onPress={() => Linking.openURL(url)}>
              Buy Now
            </Button>
          </CardSection>
        </Card>
    ); // nested components: card section is nested in card
  };
const styles = { // use flexbox to adjust spacing
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: { // made the text larger
    fontSize: 18
  },
  thumbnailStyle: {  // created style property for thumbnail
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: { // created style property for thumbnail container
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: { // adding style property for our second cardSection
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;