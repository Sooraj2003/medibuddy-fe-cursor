import { createSlice } from "@reduxjs/toolkit";


const bannersSlice = createSlice({
    name:"banners",
    initialState:null,
    reducers:{
        addBanners : (state,action)=>{
             return action.payload;
        }
    }
})

export const {addBanners} = bannersSlice.actions;

export default bannersSlice.reducer;