import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartState: false,
  openCheckout: false, 
  total: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = state.cartList.find((prod) => prod.id === action.payload.id);
      if (item) {
        item["quantity"] += 1;
      } else {
        state.cartList = [...state.cartList, action.payload];
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (prod) => prod.id !== action.payload
      );
    },
    updateItemCart: (state, action) => {
      const {id, newQuantity} = action.payload;
      const item = state.cartList.find((prod) => prod.id === id);
      item["quantity"] = newQuantity;
      console.log(state.cartList)
    },
    emptyCart: (state) => {
      state.cartList = [];

    },
    openCart: (state) => {
      state.cartState = true;
    },
    closeCart: (state) => {
      state.cartState = false;
    },
    goToCheckout: (state, action) => { 
        state.openCheckout = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemCart,
  emptyCart,
  goToCheckout,
  openCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPrice = (state) =>
  state.cart.cartList.reduce((total, curr) => total + curr.totalPrice * curr.quantity, 0);

export const getCartList = (state) => state.cart.cartList;

export const getCartState = (state) => state.cart.cartState;

export const getCheckoutState = (state) => state.cart.openCheckout;
