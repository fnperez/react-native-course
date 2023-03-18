import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ui, data } from './features'
import logger from 'redux-logger'
import { todoApi } from './services/todos/todoApi'

export const store = configureStore({
  reducer: {
    ui,
    data,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware, logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const appSelector = (state: RootState): RootState => state