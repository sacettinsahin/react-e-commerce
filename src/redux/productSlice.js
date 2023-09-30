import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  loading:false
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
