import { combineReducers } from '@reduxjs/toolkit';
import profile from './profile';
import auth from './auth';
import booking from './booking';
import seat from './seat';
import users from './users';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

const authConfig = {
  key: 'auth',
  storage,
}

const profileConfig = {
  key: 'profile',
  storage,
}

const bookingConfig = {
  key: 'booking',
  storage,
}

const seatConfig = {
  key: 'seat',
  storage,
}

const reducer = combineReducers({
  profile : persistReducer(profileConfig, profile),
  auth : persistReducer(authConfig, auth),
  booking : persistReducer(bookingConfig, booking),
  seat : persistReducer(seatConfig, seat),
  users,
});

export default reducer;
