import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  values: Cookies.get('user') ? JSON.parse(Cookies.get('user') || '') : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.values = action.payload;
    },
    logout: (state) => {
      state.values = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.values;

export default userSlice.reducer;
