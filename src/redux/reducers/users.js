// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     data: [],
// };

// const users = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         addUsers: (state, action) => {
//             state.data = [...state.data, action.payload];
//         },
//         editUser: (state, action) => {
//             const email = action.payload.email
//             const foundIndex = state.data.foundIndex(users => users.email === email)
//             if(foundIndex !== -1){
//                 state.data[foundIndex].email = action.payload.email
//                 if(action.payload.password !== ''){
//                     state.data[foundIndex].password = action.payload.password
//                 }
//             }
//         }
//     },
// });

// export const {addUsers, editUser} = users.actions
// export default users.reducer