import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, Image, TouchableNativeFeedback } from 'react-native';
import { Card, CardSection } from '../common';
import styles from './styles';

const Post = ({ post }) => {
  const { uri, author, authorId, date, description, nailAmount } = post;
  
  const loadProfile = () => {
    Actions.userProfile({ authorId });
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
          <Text style={styles.postUser}>{author}</Text>
        </TouchableNativeFeedback>
        <Text style={styles.postTime}>{new Date() - date}</Text>
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
