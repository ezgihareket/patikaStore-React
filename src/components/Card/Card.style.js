import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,

    borderRadius: 5,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#ECEFF1',
    margin: 5,
    borderRadius: 5,
  },
  inner_container: {
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inStock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
