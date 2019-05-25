import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class DetailsScreen extends Component {

  render() {
    console.log('this is the details being received: ', this.props.navigation.getParam('item'));
    let item = this.props.navigation.getParam('item');
    return (
      <Card
        title={item.title}
        image={{
          uri: item.url
        }}
      />
    )
  }
}

export default DetailsScreen;