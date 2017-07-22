import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export { Input };
