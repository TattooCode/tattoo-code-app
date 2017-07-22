import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
 
const NavScenes = () => {
  return (
    <View style={styles.mainviewStyle}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bottomButtons} onPress={() => Actions.main()}>
            <Image style={styles.iconResize} source={require('../../assets/icons/feed.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtons} onPress={() => Actions.notification()}> 
            <Image style={styles.iconResize} source={require('../../assets/icons/heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtons} onPress={() => Actions.publication()}>
            <Image style={styles.iconResize} source={require('../../assets/icons/photo.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtons} onPress={() => Actions.request()}>
            <Image style={styles.iconResize} source={require('../../assets/icons/search.png')} />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.bottomButtons} onPress={() => Actions.profile()}>
            <Image style={styles.iconResize} source={require('../../assets/icons/profile.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { NavScenes };
