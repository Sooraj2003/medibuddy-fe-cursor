import { createSlice } from "@reduxjs/toolkit";


const lifestyleSlice = createSlice({
    name:"lifeStyle",
    initialState:null,
    reducers:{
        addLifeStyle : (state,action)=>{
             return action.payload;
        }
    }
})

export const {addLifeStyle} = lifestyleSlice.actions;

export default lifestyleSlice.reducer;