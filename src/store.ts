import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ui, data } from './features'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: combineReducers({
    ui,
    data
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const appSelector = (state: RootState): RootState => state