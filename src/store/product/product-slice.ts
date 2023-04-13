import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/types/product';
import { fetchProductsFromApi, fetchProductsFromCsv } from './actions';
import { AppState } from '../store';

interface ProductSchema {
  data: Product[];
  isLoading: boolean;
  error?: string;
}

const initialState: ProductSchema = {
  data: [],
  isLoading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsFromApi.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProductsFromApi.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProductsFromApi.rejected, (state) => {
        state.isLoading = false;
        state.error = '';
      })

      .addCase(fetchProductsFromCsv.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProductsFromCsv.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProductsFromCsv.rejected, (state) => {
        state.isLoading = false;
        state.error = '';
      });
  },
});

export const { actions: productsActions } = productsSlice;

export const { reducer: productsReducer } = productsSlice;

export const getProductsData = (state: AppState) => state.products.data;
export const getProductsIsloading = (state: AppState) =>
  state.products.isLoading;
