import { createSlice } from "@reduxjs/toolkit";

interface price {
  value: string[];
  isMonth: boolean;
}

const initialState: price = {
  value: ["9", "29", "99"],
  isMonth: true,
};

const switchPrice = createSlice({
  name: "switchPrice",
  initialState: initialState,
  reducers: {
    switchToMonth: (state) => {
      state.value = ["9", "29", "99"];
      state.isMonth = true;
    },

    switchToYear: (state) => {
      state.value = ["90", "290", "990"];
      state.isMonth = false;
    },
  },
});

export const { switchToMonth, switchToYear } = switchPrice.actions;
export default switchPrice.reducer;
