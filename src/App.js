import React from 'react';
import {Dimensions, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card/Card';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import products from './products.json';

const App = () => {
  const renderProduct = ({item}) => <Card product={item} />;
  return (
    <SafeAreaView style={styles.back}>
      <Header />
      <SearchBox />
      <FlatList data={products} renderItem={renderProduct} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    padding: 10,
  },
});

export default App;
