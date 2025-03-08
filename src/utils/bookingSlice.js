import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
    name: "bookings",
    initialState: [],
    reducers: {
        addBookings: (state, action) => {
            return action.payload;
        },
    },
});

export const { addBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer; 