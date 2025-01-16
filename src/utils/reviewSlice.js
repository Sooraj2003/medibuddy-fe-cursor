import { createSlice } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    name:"reviews",
    initialState:null,
    reducers:{
        addReview : (state,action)=>{
             return action.payload;
        }
    }
})

export const {addReview} = reviewSlice.actions;

export default reviewSlice.reducer;