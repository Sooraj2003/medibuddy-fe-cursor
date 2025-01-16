import { createSlice } from "@reduxjs/toolkit";


const faqSlice = createSlice({
    name:"faqs",
    initialState:null,
    reducers:{
        addFaqs : (state,action)=>{
             return action.payload;
        }
    }
})

export const {addFaqs} = faqSlice.actions;

export default faqSlice.reducer;