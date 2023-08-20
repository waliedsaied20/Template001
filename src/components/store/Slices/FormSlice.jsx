// // 01
// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const SearchProducts = createSlice({
//   name: "products",
//   initialState: { 
//     searchWork: "",
//     searchDone: [],
//   },
//   reducers: {
//     changeProduct(state, action) {
//       state.searchWork = action.payload;
//     },
//     addProduct(state, action) {
//       state.searchDone.push({
//         name: action.payload.name,
//         cost: action.payload.cost,
//         id: nanoid(),
//       });
//     },
//     removeProduct(state, action) {
//       const updateProduct = state.searchDone.filter((product) => {
//         return product.id !== action.payload;
//       });
//       state.searchDone = updateProduct;
//     },
//   },
// });

// export const { changeProduct, addProduct, removeProduct } =
//   SearchProducts.actions;
// export const ProductsReducer = SearchProducts.reducer;
