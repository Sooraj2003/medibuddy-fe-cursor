import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../utils/servicesSlice"
import bannersReducer from "../utils/bannersSlice";
import detailReducer from "../utils/detailSlice"
import lifestyleReducer from "../utils/lifestyleSlice"
import reviewReducer from "../utils/reviewSlice"
import faqsReducer from "../utils/faqSlice"
import countReducer from "../utils/countSlice"
import bookingSlice from "./bookingSlice"
import labTestsSlice from "./labTestsSlice"


const appStore = configureStore({
   reducer:{
     services:servicesReducer,
     banners: bannersReducer,
     detail:detailReducer,
     lifeStyle:lifestyleReducer,
     reviews:reviewReducer,
     faqs:faqsReducer,
     count:countReducer,
     bookings: bookingSlice,
     labTests: labTestsSlice
   },
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: false,
     }),
   devTools: process.env.NODE_ENV !== "production",
})

export default appStore;