import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  //useState와 비슷
  name: "user",
  initialState: "lee",

  reducers: {
    changeName(state) {
      return "sh" + state;
    },
  },
});
export let { changeName } = user.actions;

let cart = createSlice({
  //useState와 비슷
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let matchId = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[matchId].count++;
    },
    minusCount(state, action) {
      let matchId = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[matchId].count--;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
export let { addCount, minusCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
