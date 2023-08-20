// This is file Configration  Store /
import { configureStore } from "@reduxjs/toolkit";
import { changeSearch , addProduct , removeProduct , mainCardReducer } from "./Slices/MainCardSlice";
import { changeName , changeCost , CardSlice1 } from "./Slices/CardSlice";

const store = configureStore({
  reducer: {
    MainCardSlice: mainCardReducer, // Start Add Product and Remove
    ProductSlice1: CardSlice1,
  },
});

export { store, changeSearch, addProduct, removeProduct , changeCost, changeName};
