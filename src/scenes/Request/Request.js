import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavScenes } from '../../components/NavScenes';
import styles from './styles';

class Request extends Component {
    
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyles}>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
    );
  }
}

export default Request;
