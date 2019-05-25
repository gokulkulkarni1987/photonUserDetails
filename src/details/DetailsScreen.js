import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, Image, Overlay } from "react-native-elements";
import ImagePicker from 'react-native-image-crop-picker';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isVisible: false
    };
  }

  selectImage() {
    this.setState({
      isVisible: true
    })
  }

  openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(userImageResponse => {
      const source = `file://${userImageResponse.path}`;
      this.setState({
        image: source,
        isVisible: false
      })
    });
  }

  openCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(userImageResponse => {
      const source = `file://${userImageResponse.path}`;
      this.setState({
        image: source,
        isVisible: false
      })
    });
  }

  render() {
    console.log(
      "this is the details being received: ",
      this.props.navigation.getParam("item")
    );
    let item = this.props.navigation.getParam("item");
    return (
      <View>
        <Card
          title={item.title}
          image={{
            uri: item.url
          }}
        />
        <View>
          <Button title="Upload"
            onPress={this.selectImage.bind(this)}
            style={{
              margin: 10
            }}
          />

          {this.state.image && <Image
            style={{ width: 200, height: 200, alignSelf: 'center' }}
            source={{ uri: this.state.image }}
          />}
        </View>
        {this.state.isVisible && (
          <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
            height={200}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around'
              }}
            >
              <Button
                title='Camera'
                onPress={this.openCamera.bind(this)}
              />
              <Button
                title='Gallery'
                onPress={this.openGallery.bind(this)}
              />
            </View>
          </Overlay>
        )}
      </View>
    );
  }
}

export default DetailsScreen;
