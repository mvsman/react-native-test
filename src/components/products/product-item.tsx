import { memo } from 'react';
import { Text } from 'react-native';

import { Product } from 'src/types/product';

interface ProductItemProps {
  item: Product;
}

export const ProductItem = memo(({ item }: ProductItemProps) => (
  <Text>{`${item.name} ${item.price}`}</Text>
));
