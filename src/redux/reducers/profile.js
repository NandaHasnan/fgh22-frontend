// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: [], 
//   loggedInUser: null, 
// };

// const profile = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
  
//     registerUser: (state, action) => {
//       state.users = [...state.users, action.payload];
//     },
  
//   },
// });

// export const { registerUser } = profile.actions;
// export default profile.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Daftar pengguna yang terdaftar
  // loggedInUser: null, // Pengguna yang sedang login
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Menambahkan pengguna baru ke dalam daftar
    registerUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    // Menangani login pengguna
    // loginUser: (state, action) => {
    //   const { email, password } = action.payload;
    //   const foundUser = state.users.find(
    //     (user) => user.email === email && user.password === password
    //   );
    //   if (foundUser) {
    //     state.loggedInUser = foundUser; // Menyimpan pengguna yang sedang login
    //   } else {
    //     state.loggedInUser = null; // Jika tidak ditemukan pengguna dengan email dan password tersebut
    //   }
    // },
    // // Menangani logout pengguna
    // logoutUser: (state) => {
    //   state.loggedInUser = null; // Menghapus status login
    // },
  },
});

export const { registerUser } = profile.actions;
export default profile.reducer;