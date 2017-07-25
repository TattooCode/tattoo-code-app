import React from 'react';
import { Image } from 'react-native';

const UserPicDetail = ({ image }) => {
  const { uri } = image;

  return (    
    <Image 
      style={{ width: 120, height: 120, margin: 7 }} 
      source={{ uri, method: 'GET' }} 
    />  
  );
};

export { UserPicDetail };
