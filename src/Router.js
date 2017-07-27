import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
// Import Scenas.
import { LoginMethod } from './scenes/LoginMethod';
import { LoginForm } from './scenes/LoginForm';
import { BasicAccountCreate } from './scenes/BasicAccountCreate';
import { Feed } from './scenes/Feed';
import { UserProfile } from './scenes/UserProfile';
import { Publication } from './scenes/Publication';
import { Request } from './scenes/Request';
// Idiomas
import I18n from './config/i18n';

// sceneStyle={{ paddingTop: (Platform.OS === 'ios') ? 120 : 120 }}

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main" Initial>
        <Scene
          Initial
          key="request" 
          component={Request}
          title={I18n.t('navRequest')}
        />

        <Scene
          key="feed"
          component={Feed}
          title="Feed"
        />
      
        <Scene
          key="userProfile" 
          component={UserProfile}
          title={I18n.t('navProfile')}
        />

        <Scene
          key="publish" 
          component={Publication}
          title={I18n.t('navPublication')}
        />
      </Scene>
      
      <Scene key="auth">
        <Scene
          key="loginMethod"
          component={LoginMethod}
          hideNavBar={'true'}
        />

        <Scene
          key="basicAccountCreate"
          component={BasicAccountCreate}
          title="Create your account"
          hideNavBar={'true'}
        />

        <Scene
          key="loginEmail"
          component={LoginForm}
          title={I18n.t('header_login')}
          hideNavBar={'true'}
        />
      </Scene>
     
      
    </Router>
  );
};

export default RouterComponent;
