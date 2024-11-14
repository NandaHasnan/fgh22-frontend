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

// Fungsi untuk memuat data dari Local Storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('user');
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (e) {
    console.error("Gagal memuat data dari Local Storage:", e);
    return {};
  }
};

// Fungsi untuk menyimpan data ke Local Storage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('user', serializedState);
  } catch (e) {
    console.error("Gagal menyimpan data ke Local Storage:", e);
  }
};

// State awal menggunakan data dari Local Storage
const initialState = {
  data: loadStateFromLocalStorage(),
};

// Membuat slice Redux
const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
      saveStateToLocalStorage(state.data); // Menyimpan data ke Local Storage saat diperbarui
    },
  },
});

export const { setProfile } = users.actions;
export default users.reducer;
