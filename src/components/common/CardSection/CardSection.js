import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CardSection = (props) => (
    <View style={[styles.containerStyle].concat(props.style)}>
      {props.children}
    </View>
);

export { CardSection };
