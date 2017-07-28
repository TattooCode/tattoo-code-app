import React, { Component } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../../components/common';
import { UserInfo } from '../../components/UserInfo';
import { UserPicList } from '../../components/UserPicList';
import { NavScenes } from '../../components/NavScenes';
import { loadHeader, loadImages } from '../../actions';
import styles from './styles';


const { height, width } = Dimensions.get('window');
const SCREEN_HEIGH = height;
const SCREEN_WIDTH = width;


class UserProfile extends Component {

  componentWillMount() {
    this.props.loadHeader(this.props.user.id);
    //this.props.loadImages();
  }

  renderExtras() {
    if (this.props.user.id_studio) {
      return (
        <View style={styles.AreaEnterprise}>
          <Button>
            Email
          </Button>
          <Button>
            Telefone
          </Button>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyles}>
          <View>
              <UserInfo>{this.props.header}</UserInfo>
          </View>

          <View>
            {this.renderExtras()}
          </View>
          
          <View>
            <UserPicList style={{ width: '100%' }}>
              {[ 
                { id: 1, uri: 'http://via.placeholder.com/120x120' },
                { id: 2, uri: 'http://via.placeholder.com/120x120' },
                { id: 3, uri: 'http://via.placeholder.com/120x120' }
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
