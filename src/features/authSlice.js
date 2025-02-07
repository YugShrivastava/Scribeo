import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  session: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.session = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.session = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
