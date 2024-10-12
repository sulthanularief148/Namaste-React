// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice"

// const appStore = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });
// export default appStore;
// store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const preloadedState = loadState(); 
import { loadState, saveState } from "../utils/localStorage";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState, 
});

appStore.subscribe(() => {
  saveState({
    cart: appStore.getState().cart,
  });
});

export default appStore;
