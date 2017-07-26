import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { loginUserWithFacebook, verifyToken } from '../../actions';
import { Card, CardSection, Button } from '../../components/common';
import I18n from '../../config/i18n';
import styles from './styles';

class LoginMethod extends Component {

  componentWillMount() {
    this.props.verifyToken();
  }

  render() {
    return (
      <Image source={require('../../assets/backgrounds/imagem04.jpg')} style={styles.fullBackground}>
        <Card style={styles.containerStyle}>
          <CardSection>
              <Text style={styles.tittleWelcome}>World's largest buy tatto comunity</Text>
          </CardSection>
          <CardSection>
            <LoginButton
            publishPermissions={['publish_actions']}
            style={{ width: 220, height: 40 }}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log(`Login failed with error: ${result.error}`);
                } else {
                  AccessToken.getCurrentAccessToken().then((data) => {
                      console.log(data);
                      this.props.loginUserWithFacebook(data.userID);
                    }
                  );
                }
              }
            }
            onLogoutFinished={() => console.log('User logged out')} 
            />
          </CardSection>
        
          <CardSection>
            <Button onPress={Actions.loginEmail}>{I18n.t('login_with_email')}</Button>
          </CardSection>
          <CardSection>
          <Text style={styles.newAcountSpaceStyle}>{I18n.t('dont_have_an_account')}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={Actions.basicAccountCreate}>{I18n.t('create_new_account')}</Button>
          </CardSection>
        </Card>
      </Image>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { id_facebook } = auth;

  return { id_facebook };
};

export default connect(mapStateToProps, {
  loginUserWithFacebook, verifyToken
})(LoginMethod);
