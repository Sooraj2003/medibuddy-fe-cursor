import { createSlice } from "@reduxjs/toolkit";


const servicesSlice = createSlice({
    name:"services",
    initialState:null,
    reducers:{
        addServices : (state,action)=>{
             return action.payload;
        }
    }
})

export const {addServices} = servicesSlice.actions;

export default servicesSlice.reducer;