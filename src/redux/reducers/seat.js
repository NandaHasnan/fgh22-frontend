// reducers/seat.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seatDetail: {
    seat: [],
    price: '',
  }
}

const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    setSeat: (state, action) => {
      state.seat = action.payload.seat;
    },
    setPrice: (state, action) => {
      state.price = action.payload.price;
    },
  },
});

export const { setSeat, setPrice } = seatSlice.actions;
export default seatSlice.reducer;
