import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { UserInfo } from '../../components/UserInfo';
import { UserPicList } from '../../components/UserPicList';
import { NavScenes } from '../../components/NavScenes';
import { loadHeader, loadImages } from '../../actions';
import styles from './styles';

// API: api/profile/1

class UserProfile extends Component {

  componentWillMount() {
    this.props.loadHeader();
    //this.props.loadImages();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyles}>
          <View>
              <UserInfo>{this.props.header}</UserInfo>
          </View>
          
          <View>
            <UserPicList style={{ width: '100%' }}>
              {[ 
                { id: 1, uri: 'http://via.placeholder.com/120x120' },
                { id: 2, uri: 'http://via.placeholder.com/120x120' },
                { id: 3, uri: 'http://via.placeholder.com/120x120' },
                { id: 4, uri: 'http://via.placeholder.com/120x120' },
                { id: 5, uri: 'http://via.placeholder.com/120x120' },
                { id: 6, uri: 'http://via.placeholder.com/120x120' }
              ]}
            </UserPicList>
            {/*<UserPicList style={{ flexDirection: 'row' }}>
                {this.props.images}
            </UserPicList>*/}
          </View> 
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  const { header, images } = profile;
  return { header, images };
};

export default connect(mapStateToProps, {
   loadHeader, loadImages
})(UserProfile);
