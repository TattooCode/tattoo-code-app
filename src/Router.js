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

      <Scene key="auth" initial>
        <Scene
          Initial
          key="loginMethod"
          component={LoginMethod}
          hideNavBar={'true'}
        />

        <scene
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
     
      <Scene key="main">
        <Scene
            Initial
            key="feed"
            component={Feed}
            title="Feed"
        />
      </Scene>
      
      <Scene key="profile">
        <Scene
          Initial
          key="UserProfile" 
          component={UserProfile}
          title={I18n.t('navProfile')}
        />
      </Scene>

      <Scene key="publication" Initial>
        <Scene
          Initial
          key="Publication" 
          component={Publication}
          title={I18n.t('navPublication')}
        />
      </Scene>

      <Scene key="request">
        <Scene
          Initial
          key="Request" 
          component={Request}
          title={I18n.t('navRequest')}
        />
      </Scene>
  
    </Router>
  );
};

export default RouterComponent;
