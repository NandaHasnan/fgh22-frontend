// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: [], 
//   // loggedInUser: null, 
// };

// const profile = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
    
//     registerUser: (state, action) => {
//       state.users = [...state.users, action.payload];
//     },
//     editUser: (state, action) => {
//       const email = action.payload.email;
//       const foundIndex = state.users.findIndex((user) => user.email === email);
//       if (foundIndex !== -1) {
//         // state.users[foundIndex].firstName = action.payload.firstName;
//         state.users[foundIndex].email = action.payload.email;
//         if (action.payload.password !== ''){
//           state.users[foundIndex].password = action.payload.password;
//         }
//       }
//     }
//   },
// });

// export const { registerUser, editUser } = profile.actions;
// export default profile.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], 
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
        const updatedUser = state.users[foundIndex];

        // Update fields if provided
        updatedUser.firstName = action.payload.firstName || updatedUser.firstName;
        updatedUser.lastName = action.payload.lastName || updatedUser.lastName;
        updatedUser.phoneNumber = action.payload.phoneNumber || updatedUser.phoneNumber;
        updatedUser.email = action.payload.email || updatedUser.email;

        // Update password only if it’s provided
        if (action.payload.password) {
          updatedUser.password = action.payload.password;
        }
      }
    }
  },
});

export const { registerUser, editUser } = profile.actions;
export default profile.reducer;
