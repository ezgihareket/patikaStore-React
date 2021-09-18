import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: product.imgURL}}></Image>

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.inStock}>
          {product.inStock === true ? ' ' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};

export default Card;
