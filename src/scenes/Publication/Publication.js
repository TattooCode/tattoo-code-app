import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { NavScenes } from '../../components/NavScenes';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import styles from './styles';

class Publication extends Component {
    
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyles}>
         
         <Text style={styles.descriptionPublication}>Write a caption</Text>
         
         <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.inputDescription} />
          

          <ImagePickerComponent 
            autoStart  
          />
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
    );
  }
}

export default Publication;
