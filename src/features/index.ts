import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './data/authSlice/authSlice'
import layoutReducer from './ui/layoutSlice/layoutSlice'

export const ui = combineReducers({
  layout: layoutReducer,
})

export const data = combineReducers({
  auth: authReducer,
})
