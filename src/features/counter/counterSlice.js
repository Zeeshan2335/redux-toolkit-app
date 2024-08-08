import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const reducers = {
  handleIncreament: (state, action) => {
    state.counter = action.payload + 1;
  },
  handleDecreament: (state, action) => {
    let count = state.counter > 0 && action.payload - 1;
    state.counter = count || 0;
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers,
});

export const { handleIncreament, handleDecreament } = counterSlice.actions;
export default counterSlice.reducer;
