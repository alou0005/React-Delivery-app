import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  restaurant: {
    //props,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {},
  reducers: {
    setRestaurant: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It

      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
