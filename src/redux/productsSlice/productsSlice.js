import { createSlice } from "@reduxjs/toolkit";
import { getDefaultProducts } from "./data.js";

const initialState = {
  products: getDefaultProducts(),
  selectProduct: {},
  cartProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);

      state.selectProduct = { ...product };
    },

    addProduct: (state, action) => {
      const id = action.payload.id;

      const product = state.cartProducts.find((p) => p.id === id);

      if (product) {
        product.total += action.payload.total;
        state.cartProducts = state.cartProducts.map((p) => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...product };
          }
        });
      } else {
        state.cartProducts.push(action.payload);
      }
    },

    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },

    clearAllProduct: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { selectProduct, addProduct, removeProduct, clearAllProduct } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
