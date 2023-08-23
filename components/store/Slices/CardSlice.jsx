import { createSlice } from "@reduxjs/toolkit";


const CardSlice = createSlice({
    name: 'product',
    initialState: {
        name: '', 
        cost:0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action){
            state.cost = action.payload
        },
    },
    // extraReducers(builder) {
    //     builder.addCase(addProduct, (state, action) => {
    //         state.name = '';
    //         state.cost = 0;
    //     })
    // }
})

export const {changeName, changeCost} = CardSlice.actions
export const CardSlice1 = CardSlice.reducer




