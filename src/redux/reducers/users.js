import {createSlice} from '@reduxjs/toolkit'

const initialState = {};

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const foundUser = state.users.find(
              (user) => user.email === email && user.password === password
            );
            if (foundUser) {
              state.loggedInUser = foundUser; // Menyimpan pengguna yang sedang login
            } else {
              state.loggedInUser = null; // Jika tidak ditemukan pengguna dengan email dan password tersebut
            }
          },
          // Menangani logout pengguna
          logoutUser: () => {
            return initialState
          },
    }

})

export const { loginUser, logoutUser } = profile.actions;
export default profile.reducer;