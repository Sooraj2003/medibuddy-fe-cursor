import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../utils/servicesSlice"
import bannersReducer from "../utils/bannersSlice";
import detailReducer from "../utils/detailSlice"


const appStore = configureStore({
   reducer:{
     services:servicesReducer,
     banners: bannersReducer,
     detail:detailReducer
   }
})

export default appStore;