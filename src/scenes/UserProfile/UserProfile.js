import React, { Component } from 'react';
import { ScrollView, View, Dimensions, TouchableHighlight, Text } from 'react-native';
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
    this.props.loadImages(this.props.user.id);
    this.props.loadHeader(this.props.user.id);
  }

  renderExtras() {
    if (this.props.user.id_studio) {
      return (
        <View style={styles.AreaEnterprise}>
          <TouchableHighlight style={{ width: (SCREEN_WIDTH / 2), height: 45, alignItems: 'center' }}>
            <Text style={styles.alignText}>Telefone</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{ width: (SCREEN_WIDTH / 2), height: 45, alignItems: 'center' }}>
            <Text style={styles.alignText}>E-mail</Text>
          </TouchableHighlight>
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
             <UserPicList style={{ flexDirection: 'row' }}>
                {this.props.images}
            </UserPicList> 
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
  console.log(header);
  return { header, images };
};

export default connect(mapStateToProps, {
   loadHeader, loadImages
})(UserProfile);
