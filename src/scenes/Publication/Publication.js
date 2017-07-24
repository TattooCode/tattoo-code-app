import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { publish, publicationChanged } from '../../actions';
import { NavScenes } from '../../components/NavScenes';
import { Button, Spinner, CardSection } from '../../components/common';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import I18n from '../../config/i18n';
import styles from './styles';

class Publication extends Component {

  onButtonPress() {
		const { description, photo } = this.props;
		
		this.props.publish({ description, photo });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				{I18n.t('button_create_account')}
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
            onChangeText={value => this.props.publicationChanged({ prop: 'description', value })}
          />

          <ImagePickerComponent 
            updateState={value => this.props.publicationChanged({ prop: 'photo', value })}
            autoStart  
          />
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
