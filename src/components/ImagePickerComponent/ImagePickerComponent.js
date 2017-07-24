import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class ImagePickerComponent extends Component {

  componentWillMount() {
    if (this.props.autoStart) {
       this.renderImagePicker();
    }
  }

  getPictureValue(value) {
    this.props.updateState(value);
  }

  renderImagePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.getPictureValue(response);
      }
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.renderImagePicker.bind(this)}>
        {this.props.children}
      </TouchableHighlight >
    );		
  }

}

export { ImagePickerComponent };
