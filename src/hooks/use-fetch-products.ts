import { useCallback, useState } from 'react';

import { Product } from 'src/types/product';

const URLS: String[] = [
  'https://paycon.su/api1.php',
  'https://paycon.su/api2.php',
];

const requests = URLS.map((url) => fetch(url as string));

export const useFetchProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  const onLoadFromApi = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await Promise.all(requests);
      const [data, data2] = await Promise.all(response.map((a) => a.json()));
      setProducts([...data, ...data2]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    products,
    onLoadFromApi,
  };
};
