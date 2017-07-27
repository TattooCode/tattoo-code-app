import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, Image, TouchableNativeFeedback } from 'react-native';
import { Card, CardSection } from '../common';
import styles from './styles';

const Post = ({ post }) => {
  const { uri, user, date, description, nailAmount } = post;
  
  const loadProfile = () => {
    Actions.userProfile({ user });
  };

  const dateDiff = (dateProp) => {
    const dateNow = new Date();
    const datePost = new Date(dateProp);

    let delta = Math.abs(datePost - dateNow) / 1000;
    let hours;
    let minutes;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    hours *= 24;

    minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    minutes *= 60;

    const seconds = delta * 60;

    if (seconds < 60) return `${Math.round(seconds)} seconds ago`;
    else if (minutes < 60) return `${minutes} minuts ago`;
    else if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  };

  return (
    <Card>
      <CardSection>
        <Image 
          style={styles.strachImage} 
          source={{  
            uri,
            method: 'GET'
          }} 
        />
      </CardSection>

      <CardSection style={styles.post}>
        <TouchableNativeFeedback onPress={loadProfile.bind(this)}>
          <Text style={styles.postUser}>{user.name}</Text>
        </TouchableNativeFeedback>
        <Text style={styles.postTime}>{dateDiff(date)}</Text>
      </CardSection>

      <CardSection style={styles.post}>
        <Text style={styles.postDescription}>{description}</Text>
      </CardSection>

      <CardSection style={{ flex: 1, flexDirection: 'row' }}>
        <Image style={styles.iconResize} source={require('../../assets/icons/heart.png')} />
        <Text style={styles.flexAlign}>{nailAmount}</Text>
        <Image style={styles.iconResize} source={require('../../assets/icons/comments.png')} />
        {/*<Text style={styles.flexAlign}>02 Comentário(s)</Text>*/}
      </CardSection>
    </Card>
  );
};

export { Post };
