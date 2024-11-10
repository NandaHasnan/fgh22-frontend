import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], 
  loggedInUser: null, 
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  
    registerUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
   
    loginUser: (state, action) => {
      state.loggedInUser = action.payload; // Set langsung data pengguna
    },
    // loginUser: (state, action) => {
    //   const { email, password } = action.payload;
    //   const foundUser = state.users.find(
    //     (user) => user.email === email && user.password === password
    //   );
    //   if (foundUser) {
    //     state.loggedInUser = foundUser; 
    //   } else {
    //     state.loggedInUser = null; 
    //   }
    // },

    logoutUser: (state) => {
      state.loggedInUser = null; 
    },
  },
});

export const { registerUser, loginUser, logoutUser } = profile.actions;
export default profile.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: [], // Daftar pengguna
//   loggedInUser: null, // Pengguna yang sedang login
// };

// const profile = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     registerUser: (state, action) => {
//       state.users = (action.payload); // Menambah pengguna baru
//       state.loggedInUser = action.payload; // Mengatur pengguna baru sebagai pengguna yang masuk
//     },
    
//     loginUser: (state, action) => {
//       const { email, password, token } = action.payload;
//       const foundUser = state.users.find(
//         (user) => user.email === email && user.password === password
//       );
//       if (foundUser) {
//         state.loggedInUser = { ...foundUser, token }; // Menyimpan token bersama data pengguna
//       } else {
//         state.loggedInUser = null;
//       }
//     },

//     logoutUser: (state) => {
//       state.loggedInUser = null; // Logout dengan menghapus data pengguna
//     },
//   },
// });

// export const { registerUser, loginUser, logoutUser } = profile.actions;
// export default profile.reducer;
