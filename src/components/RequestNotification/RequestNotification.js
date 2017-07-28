import React from 'react';
import { View, Image, Text } from 'react-native';
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
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri }}
          />
        </View>
        <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{description}</Text>
            <Text>{user.name}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri }}
        />
      </CardSection>
    </Card>
  );
};

export default RequestNotification;
