import { createSlice } from "@reduxjs/toolkit";
import { mockLabTests } from "./mockData";

const initialState = {
  items: mockLabTests,
  isLoading: false,
  error: null
};

const labTestsSlice = createSlice({
  name: "labTests",
  initialState,
  reducers: {
    addLabTests: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearLabTests: (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { addLabTests, setLoading, setError, clearLabTests } = labTestsSlice.actions;
export default labTestsSlice.reducer; 