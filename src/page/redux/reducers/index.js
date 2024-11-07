import {combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import profile from './profile'
import users from './users'

const reducer = combineReducers({
    auth,
    profile,
    users,
})

export default reducer