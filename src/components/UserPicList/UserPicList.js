import React from 'react';
import { View } from 'react-native';
import { UserPicDetail } from '../UserPicDetail/UserPicDetail';

const UserPicList = ({ children }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {children.map(item => <UserPicDetail style={{ width: '100%' }} key={item.id} image={item} />)}
      </View>
    );
};

export { UserPicList };
