import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { publish, publicationChanged } from '../../actions';
import { NavScenes } from '../../components/NavScenes';
import { Button, Spinner, CardSection } from '../../components/common';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import I18n from '../../config/i18n';
import styles from './styles';

class Publication extends Component {

  componentWillMount() {
    this.setState({ thumb: 'https://brewerjwebdesign.com/wp-content/uploads/2014/03/wp_upload_bits.png' });
  }

  onButtonPress() {
		const { description, photo } = this.state;
		
		this.props.publish({ description, photo });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
        Publish
			</Button>
		);
	}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyles}>
         
          <Text style={styles.descriptionPublication}>Write a caption</Text>
          
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.inputDescription} 
            onChangeText={value => { 
              this.props.publicationChanged({ prop: 'description', value });
              this.setState({ description: value });
            }}
          />

          <ImagePickerComponent 
            updateState={value => {
              this.props.publicationChanged({ prop: 'photo', value });
              this.setState({ thumb: `data:image/jpeg;base64, ${value.data}` });
              this.setState({ photo: value });
            }}
            autoStart  
          >
            <Image 
              style={{ alignSelf: 'center', width: 200, height: 200, margin: 7 }} 
              source={{ uri: this.state.thumb }} 
            />
          </ImagePickerComponent> 


          <CardSection> 
            {this.renderButton()}
          </CardSection>
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
    );
  }
}

const mapStateToProps = publication => {
  const { description, photo } = publication;
  return { description, photo };
};

export default connect(mapStateToProps, {
  publish, publicationChanged
})(Publication);
