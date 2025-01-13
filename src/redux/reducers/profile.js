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
    setProfile: (state, action) => {
      state.users = action.payload
    },
    registerUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action) => {
      // const email = action.payload.email;
      // const foundIndex = state.users.findIndex((user) => user.email === email);
    
      // if (foundIndex !== -1) {
      //   const updatedUser = state.users[foundIndex];
    
      //   updatedUser.firstname = action.payload.firstname || updatedUser.firstname;
      //   updatedUser.lastname = action.payload.lastname || updatedUser.lastname;
      //   updatedUser.phone_number = action.payload.phone_number || updatedUser.phone_number;
      //   updatedUser.email = action.payload.email || updatedUser.email;
    
      //   if (action.payload.password) {
      //     updatedUser.password = action.payload.password;
      //   }
      // }
      state.users = [...state.users, ...action.payload]
    },
    
  },
});

export const { setProfile, registerUser, editUser } = profile.actions;
export default profile.reducer;

// import { combineReducers } from '@reduxjs/toolkit';

// import auth from './auth'

// const reducer = combineReducers({
//   auth: auth
// })

// export default reducer