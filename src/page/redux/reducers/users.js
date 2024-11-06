import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: [],
};

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        editUser: (state, action) => {
            const email = action.payload.email
            const foundIndex = state.data.foundIndex(users => users.email === email)
        }
    },
});

export const {addUsers} = users.actions
export default users.reducer