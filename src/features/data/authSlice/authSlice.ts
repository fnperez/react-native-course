import { createSlice } from '@reduxjs/toolkit'
import { register } from './actions'
import type { AuthState } from './types'

const initialState: AuthState = {
  loggedUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(state, action)
    },
    logout: (state) => {
      state.loggedUser = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.loggedUser = action.payload
    })
  }
})

export { register }

export const { login, logout } = authSlice.actions

export default authSlice.reducer