import React from 'react'
import { useSelector } from 'react-redux'
import AuthenticatedNavigator from './AuthenticatedNavigator'
import UnauthenticatedNavigator from './UnauthenticatedNavigator'
import { selectIsLoggedIn } from '@/features/data/authSlice/selectors'

const RootNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (isLoggedIn) {
    return <AuthenticatedNavigator />
  }

  return <UnauthenticatedNavigator />
}

export default RootNavigator
