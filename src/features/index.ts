import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './data/authSlice/authSlice'

export const ui = combineReducers({})

export const data = combineReducers({
  auth: authReducer
})