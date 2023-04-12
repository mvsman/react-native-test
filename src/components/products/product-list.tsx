import { FlatList } from 'react-native';

import { Product } from 'src/types/product';
import { ProductItem } from './product-item';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductItem item={item} />
  );
  const keyExtractor = (item: Product) => item.id;

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
