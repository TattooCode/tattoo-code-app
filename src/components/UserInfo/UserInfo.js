import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { Card, CardSection } from '../../components/common';
import styles from './styles';

const UserInfo = ({ children }) => {
    const { cardContent, imageStyleUser, descriptionUser } = styles;
    const { nickname, name, biography, uri } = children;
    
    return ( 
      <ScrollView>
        <Card style={cardContent}> 
          <CardSection style={{ flexDirection: 'row', marginBottom: 20, marginTop: 80 }}>
            <Image 
              style={imageStyleUser} 
              source={{  
                uri,
                method: 'GET'
              }}  
            />
            <Text style={descriptionUser}>{name} {'\n'}@{nickname}</Text>
          </CardSection>

          <CardSection style={{ marginBottom: 20 }}>
            <Text style={descriptionUser}>{biography}</Text>
          </CardSection>
        </Card>
      </ScrollView>
    );
};

export { UserInfo };
