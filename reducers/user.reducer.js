import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    nickname: "initialNickname",
    address: "initialAddress",
  },
  reducers: {
    updateNickname(state, action) {
      const { data } = action.payload;
      state.nickname = data;
    },
    updateAddress(state, action) {
      const { data } = action.payload;
      state.address = data;
    },
  },
});

export const { updateNickname, updateAddress } = userSlice.actions;
export const userReducer = userSlice.reducer;