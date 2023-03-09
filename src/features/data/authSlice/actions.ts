import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AuthState, Credentials } from './types'

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: Credentials, thunkAPI): Promise<AuthState['loggedUser']> => {
    const rawUser = await AsyncStorage.getItem(credentials.email)

    if (rawUser) {
      throw thunkAPI.rejectWithValue(
        `A user with email ${credentials.email} already exists.`
      )
    }

    const user = {
      ...credentials,
      createdAt: new Date().getDate()
    }

    await AsyncStorage.setItem(credentials.email, JSON.stringify(user))

    return user
  })

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, thunkAPI): Promise<AuthState['loggedUser']> => {
    const rawUser = await AsyncStorage.getItem(credentials.email)
    const user = JSON.parse(rawUser ?? '')

    if (!rawUser || user.password !== credentials.password) {
      throw thunkAPI.rejectWithValue(`Email ${credentials.email} not found or password incorrect.`)
    }

    return user
  })