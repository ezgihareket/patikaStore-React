import React from 'react';
import {Text, View} from 'react-native';
import styles from './Header.style';

const Header = () => {
  return (
    <View>
      <Text style={styles.header_title}>PATIKASTORE</Text>
    </View>
  );
};

export default Header;
