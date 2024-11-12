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
  users: [], 
  // loggedInUser: null, 
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    
    registerUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action) => {
      const email = action.payload.email;
      const foundIndex = state.users.findIndex((user) => user.email === email);
      if (foundIndex !== -1) {
        // state.users[foundIndex].firstName = action.payload.firstName;
        state.users[foundIndex].email = action.payload.email;
        if (action.payload.password !== ''){
          state.users[foundIndex].password = action.payload.password;
        }
      }
    }
  },
});

export const { registerUser, editUser } = profile.actions;
export default profile.reducer;