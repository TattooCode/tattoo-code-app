import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Post } from '../../components/Post';
import { NavScenes } from '../../components/NavScenes';
import { loadFeed } from '../../actions';
import styles from './styles';

class Feed extends Component {

  componentWillMount() {
    this.props.loadFeed();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyles}>
          {this.props.posts.map(item => <Post key={item.id} post={item} />)}
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ feed }) => {
  const { posts } = feed;
  return { posts };
};

export default connect(mapStateToProps, { loadFeed })(Feed);
