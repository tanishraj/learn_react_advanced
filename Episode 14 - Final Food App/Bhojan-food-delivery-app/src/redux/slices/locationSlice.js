import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
