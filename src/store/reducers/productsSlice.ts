// src/store/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  description: string;
  weight: number;
  purity: string;
  price: number;
  image: string;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    }
  }
});

export const { addProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
