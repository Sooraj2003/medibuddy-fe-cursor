import { createSlice } from "@reduxjs/toolkit";


const detailSlice = createSlice({
    name:"services",
    initialState:null,
    reducers:{
        addDetail : (state,action)=>{
             return action.payload;
        }
    }
})

export const {addDetail} = detailSlice.actions;

export default detailSlice.reducer;