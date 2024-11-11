import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  data: {},
};

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setProfile: (state, action) => {
          state.data = action.payload
        }
    }

})

export const { setProfile } = users.actions;
export default users.reducer;