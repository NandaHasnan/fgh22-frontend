import { combineReducers } from '@reduxjs/toolkit';
import profile from './profile';
import auth from './auth';
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

const reducer = combineReducers({
  profile : persistReducer(profileConfig, profile),
  auth : persistReducer(authConfig, auth),
  users,
});

export default reducer;
