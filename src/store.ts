import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import { data } from './features'

export const store = configureStore({
  reducer: combineReducers({
    // ui,
    data,
  }),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const appSelector = (state: RootState) => state
