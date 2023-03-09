import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoading } from '../../features/ui/layoutSlice/selectors'
import Loader from '../Loader/Loader'

const Layout = ({ children }: PropsWithChildren) => {
  const loading = useSelector(selectIsLoading)

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  )
}

export default Layout
