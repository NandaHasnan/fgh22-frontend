import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {}, 
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
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        state.loggedInUser = foundUser; 
      } else {
        state.loggedInUser = null; 
      }
    },

    logoutUser: (state) => {
      state.loggedInUser = null; 
    },
  },
});

export const { registerUser, loginUser, logoutUser } = profile.actions;
export default profile.reducer;


