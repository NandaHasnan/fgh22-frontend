import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieDetails: {
    movie_image: '',
    title: '',
    genre: '',
    selectedDate: '',
    selectedTime: '',
    location: '',
    cinemaName: '',
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state.movieDetails = {
        ...state.movieDetails,
        ...action.payload,
      };
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
