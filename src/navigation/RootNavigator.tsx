import React from 'react'
import AuthenticatedNavigator from './AuthenticatedNavigator'
import UnauthenticatedNavigator from './UnauthenticatedNavigator'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../features/data/authSlice/selectors'

const RootNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (isLoggedIn) {
    return <AuthenticatedNavigator />
  }

  return <UnauthenticatedNavigator />
}

export default RootNavigator
