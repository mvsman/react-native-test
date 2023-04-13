import React from 'react';
import { StyleSheet, StatusBar, View, Button } from 'react-native';
import { Provider } from 'react-redux';

import { ModalLoader } from './src/components/modal';
import { ProductList } from './src/components/products';

import { store } from './src/store/store';
import { useAppDispatch, useAppSelector } from './src/store/hooks';
import {
  getProductsData,
  getProductsIsloading,
} from './src/store/product/product-slice';
import {
  fetchProductsFromApi,
  fetchProductsFromCsv,
} from './src/store/product/actions';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getProductsIsloading);
  const products = useAppSelector(getProductsData);

  const onLoadFromApi = () => {
    dispatch(fetchProductsFromApi());
  };

  const onLoadFromCsv = () => {
    dispatch(fetchProductsFromCsv());
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="Загрузить из API" onPress={onLoadFromApi} />
        <Button title="Загрузить из файла" onPress={onLoadFromCsv} />
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

export default Root;
