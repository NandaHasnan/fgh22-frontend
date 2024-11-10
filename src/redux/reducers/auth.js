// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     token: '',
// };

// const auth = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.token = action.payload
//         },
//         logout: () => {
//             return initialState
//         },
//     },
// });

// export const {login, logout} = auth.actions;
// export default auth.reducer;

// slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    user: { email: '', password: '' },
  },
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = { email: '', password: '' };
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
