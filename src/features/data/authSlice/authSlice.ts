import { createSlice } from '@reduxjs/toolkit'
import { register, login } from './actions'
import type { AuthState } from './types'

const initialState: AuthState = {
  loggedUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* login: (state, action) => {
      state.loggedUser = action.payload
    }, */
    logout: (state) => {
      state.loggedUser = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.loggedUser = action.payload
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loggedUser = action.payload
    });
  }
})

export { login, register }

export const { logout } = authSlice.actions

export default authSlice.reducer