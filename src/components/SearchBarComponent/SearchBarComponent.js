import React, { Component } from 'react';
import StyleSheet from 'react-native';
import SearchBar from 'react-native-material-design-searchbar';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class SearchBarComponent extends Component {
  render() {
    return (
      <SearchBar
        onSearchChange={() => console.log('On Focus')}
        height={50}
        width={400}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Search...'}
        autoCorrect={false}
        padding={0}
        returnKeyType={'search'}
        style={styles.searchBar}
      />
    );
  }
}

export { SearchBarComponent };
