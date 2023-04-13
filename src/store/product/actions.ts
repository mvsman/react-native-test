import { createAsyncThunk } from '@reduxjs/toolkit';

import { Product } from 'src/types/product';
import { convertCsvToProduct } from './utils';

const URLS: String[] = [
  'https://paycon.su/api1.php',
  'https://paycon.su/api2.php',
];

const CSV_URL =
  'https://paycon.su/%D0%91%D0%B0%D0%B7%D0%B0_%D0%B4%D0%BB%D1%8F_%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE.csv';

const requests = URLS.map((url) => fetch(url as string));

export const fetchProductsFromApi = createAsyncThunk<Product[], void>(
  'products/fetchProductsFromApi',
  async () => {
    const response = await Promise.all(requests);
    const [data, data2] = await Promise.all(response.map((a) => a.json()));

    const result: Product[] = [...data, ...data2];

    if (!result) {
      throw new Error();
    }

    return result;
  }
);

export const fetchProductsFromCsv = createAsyncThunk<Product[], void>(
  'products/fetchProductsFromCsv',
  async () => {
    const response = await fetch(CSV_URL);
    const text = await response.text();

    if (!text) {
      throw new Error();
    }

    return convertCsvToProduct(text);
  }
);
