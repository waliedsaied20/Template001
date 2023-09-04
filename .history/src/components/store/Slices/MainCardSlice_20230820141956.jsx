import { createSlice} from "@reduxjs/toolkit";
const MainCardSlice = createSlice({
  name: "products",
  initialState: {
    searchProduct: "",
    productList: [],
  },
  reducers: {
    // Search Product
    changeSearch(state, action) {
      state.searchProduct = action.payload;
    },
    // Add Product
    addProduct(state, action) {
      // state.productList.push({
      //     name: action.payload.name,
      //     cost: action.payload,
      // })
      console.log(action.payload)
      return {...state,productList: [...state.productList, action.payload],
      };
    },
    // Delete Product
    removeProduct(state, action) {
      console.log(action.payload)
      const upDateProduct = state.productList.filter((product) => {
        
        return product.id !== action.payload;
      });
      console.log(upDateProduct)
      // state.productList = upDateProduct;
      return {
        ...state, productList: upDateProduct
      } 
    },
    // removeProduct(state,action) {
    //   const updateProduct = [...state.productList];
    //   const indexToRemove = updateProduct.findIndex(product => product.id === action.payload)
    //   if(indexToRemove !== -1){
    //     updateProduct.splice(indexToRemove , 1)
    //   }
    //   return {
    //     state, productList: updateProduct
    //   }
    // }
  },
});

export const { changeSearch, addProduct, removeProduct } =
  MainCardSlice.actions;
export const mainCardReducer = MainCardSlice.reducer;
