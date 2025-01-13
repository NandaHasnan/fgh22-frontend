import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: ""
}

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    logout: () => {
      return initialState
    }
  }
})

export const { login, logout } = auth.actions
export default auth.reducer


// // redux/reducers/auth.js
// import { createSlice } from '@reduxjs/toolkit';

// // Initial state
// const initialState = {
//   token: localStorage.getItem('token') || null,
// };

// // Redux slice untuk autentikasi
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       const { token } = action.payload;
//       state.token = token;
//       localStorage.setItem('token', token); // Simpan token di localStorage
//     },
//     logout: (state) => {
//       state.token = null;
//       localStorage.removeItem('token'); // Hapus token ketika logout
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;