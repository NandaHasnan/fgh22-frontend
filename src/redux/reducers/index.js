import { combineReducers } from '@reduxjs/toolkit';
import Profile from './profile';

const reducer = combineReducers({
  Profile: Profile,
});

export default reducer;
