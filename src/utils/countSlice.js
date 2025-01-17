import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    index: null,
    count: 1,
  },
  reducers: {
    incCount: (state, action) => {
      if (state.index === action.payload) {
        state.count += 1; // Increment count if index matches
      } else {
        state.index = action.payload; // Update index
        state.count = 2; // Reset count to 2 (since initial is 1)
      }
    },
    decCount: (state, action) => {
      if (state.index === action.payload) {
        if (state.count > 1) {
          state.count -= 1; // Decrement count, but not below 1
        }
      }
    },
  },
});

export const { incCount, decCount } = countSlice.actions;

export default countSlice.reducer;
