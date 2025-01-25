// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//   data: {},
// };

// const users = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         setProfile: (state, action) => {
//           state.data = action.payload
//         }
//     }

// })

// export const { setProfile } = users.actions;
// export default users.reducer;


import { createSlice } from '@reduxjs/toolkit';


const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('user');
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (e) {
    console.error("Gagal memuat data dari Local Storage:", e);
    return {};
  }
};


const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('user', serializedState);
  } catch (e) {
    console.error("Gagal menyimpan data ke Local Storage:", e);
  }
};


const initialState = {
  data: loadStateFromLocalStorage(),
};


const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
      saveStateToLocalStorage(state.data); 
    },
  },
});

export const { setProfile } = users.actions;
export default users.reducer;
