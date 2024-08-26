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
const preloadedState = loadState(); // Load initial state from localStorage
import { loadState, saveState } from "../utils/localStorage"; // Adjust the path as necessary

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState, // Use the preloaded state
});

appStore.subscribe(() => {
  saveState({
    cart: appStore.getState().cart,
  });
});

export default appStore;
