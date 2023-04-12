import React from 'react';
import { StyleSheet, StatusBar, View, Button } from 'react-native';

import { useFetchProducts } from './src/hooks/use-fetch-products';
import { ModalLoader } from './src/components/modal';
import { ProductList } from './src/components/products';

const App = () => {
  const { products, isLoading, onLoadFromApi } = useFetchProducts();

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="Загрузить из API" onPress={onLoadFromApi} />
        <Button title="Загрузить из файла" />
      </View>
      {products.length > 0 && <ProductList products={products} />}
      <ModalLoader visible={isLoading} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 24,
  },
});

export default App;
