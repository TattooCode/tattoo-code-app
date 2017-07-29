import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { requestIdea, requestIdeaChanged, loadStudios } from '../../actions';
 
import { NavScenes } from '../../components/NavScenes';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import { Button, Spinner, Input } from '../../components/common';
import styles from './styles';
import I18n from '../../config/i18n';

const { height, width } = Dimensions.get('window');
const SCREEN_HEIGH = height;
const SCREEN_WIDTH = width;

class Request extends Component {
  
  constructor() {
    super();

    this.state = {
      region: {
        latitude: -29.584497,
        longitude: -51.089526,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }

  componentWillMount() {
    this.setState({ thumb: 'https://brewerjwebdesign.com/wp-content/uploads/2014/03/wp_upload_bits.png' });
    this.props.loadStudios();

    console.log(this.props.studios);

    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Position');
      console.log(position);
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      this.calcDelta(lat, long, accuracy);
    });
  }

  onButtonPress() {    
    const latitude = this.state.region.latitude;
    const longitude = this.state.region.longitude;
    const description = this.state.description;
    const photo = this.state.photo;

		this.props.requestIdea({ latitude, longitude, description, photo });
  }

  calcDelta(lat, long, accuracy) {
    const oneDegreeOfLongitudInMeters = 111.32;
    const circumference = (40075 / 360);
    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const longDelta = (accuracy / oneDegreeOfLongitudInMeters);
    
    this.setState({
      region: {
        latitude: lat, 
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta
      }
    });
    
    console.log('Update region');
    console.log(this.state.region);
  }

  marker() {
    return {
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude
    };
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
          <View style={styles.mapStyle}>
            <MapView
              style={{ width: SCREEN_WIDTH, height: (SCREEN_HEIGH / 2), flex: 1 }}
              initialRegion={{
                latitude: -29.584497,
                longitude: -51.089526,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
               {this.props.studios.studios.map(item =>
                <MapView.Marker 
                  coordinate={{ latitude: Number(item.latitude), longitude: Number(item.longitude) }}
                  title={item.name}
                  description={item.social_name}
                />
              )}
            </MapView>
          </View>
          
          <Text style={styles.titleRequest}>Descrição da tatuagem</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.inputDescription} 
            underlineColorAndroid='transparent'
            onChangeText={(description) => this.setState({ description })}
            value={this.state.description}
          />

          <ImagePickerComponent
						updateState={value => {
            this.props.requestIdeaChanged({ prop: 'photo', value });
            this.setState({ thumb: `data:image/jpeg;base64, ${value.data}` });
            this.setState({ photo: value });
					}}
          >
            <Image 
              style={{ 
                width: 200,
                height: 200, 
                marginTop: 20, 
                marginBottom: 20,
                alignSelf: 'center'
              }} 
              source={{ uri: this.state.thumb }}
            />
					</ImagePickerComponent>
          
          {this.renderButton()}
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
    );
  }
} 

const mapStateToProps = ({ studios, idea }) => {
  const { latitude, longitude, description, photo } = idea;
  return { studios, latitude, longitude, description, photo };
};

export default connect(mapStateToProps, {
   requestIdea, requestIdeaChanged, loadStudios 
})(Request);
