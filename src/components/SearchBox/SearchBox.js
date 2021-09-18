import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBox.style';

const SearchBox = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
};

export default SearchBox;
