import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PushNotificationIOS } from 'react-native'
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

    if (rawUser) {
      const user = JSON.parse(rawUser)
      if (user.password === credentials.password) {
        return user
      }
    }
    throw thunkAPI.rejectWithValue('Email or password incorrect.')

  })