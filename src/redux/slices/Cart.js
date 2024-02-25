// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems"))!==null? JSON.parse(localStorage.getItem("cartItems")):[]
  },
  reducers: {
    addItem(state, action) {
    //   const { item, quantity } = action.payload;
    //   state.items[item] = (state.items[item] || 0) + quantity;
    state.items.push(action.payload);
    },
    updateAllItem(state, action) {
      console.log(action.payload)
      state.items = action.payload;
    },
    removeItem(state, action) {
      delete state.items[action.payload.item];
    }
  }
});

export const { addItem, updateAllItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
