import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { Card, CardSection } from '../common';

const RequestNotification = ({ notification }) => {
  const { user, uri, description, date } = notification;
  const {
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle } = styles;

  return (
    <TouchableOpacity onPress={() => Actions.userProfile({ user })}>
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: user.uri, method: 'GET' }}
            />
          </View>
          <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{description}</Text>
              <Text>{user.name}</Text>
              <Text>{date}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri, method: 'GET' }}
          />
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

export { RequestNotification };
