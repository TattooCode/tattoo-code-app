import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { requestIdea, requestIdeaChanged } from '../../actions';
 
import { NavScenes } from '../../components/NavScenes';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import { Button, Spinner } from '../../components/common';
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
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      const userPosition = {
        positionLat: lat,
        positionLong: long
      };

      this.calcDelta(lat, long, accuracy);
    });
  }

  onButtonPress() {
		const { userPosition, description, photo } = this.props;
		this.props.requestIdea({ userPosition, description, photo });
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
              initialRegion={this.state.region}
            >
              <MapView.Marker 
                coordinate={this.marker()}
                title="EU"
                description="Home"
              />
            </MapView>
          </View>
          
          <Text style={styles.titleRequest}>Descrição da tatuagem</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.inputDescription} 
            underlineColorAndroid='transparent'
          />

          <ImagePickerComponent
						updateState={value => {
            this.props.requestIdeaChanged({ prop: 'photo', value });
            this.setState({ thumb: `data:image/jpeg;base64, ${value.data}` });
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
              source={{ uri: 'http://via.placeholder.com/200x200' }}
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

const mapStateToProps = ({ requestNotification }) => {
  return requestNotification;
};

export default connect(mapStateToProps, {
   requestIdea, requestIdeaChanged 
})(Request);
