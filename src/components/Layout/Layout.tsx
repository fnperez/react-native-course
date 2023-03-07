import type { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import Loader from '@/components/Loader/Loader'
import { selectIsLoading } from '@/src/features/ui/layoutSlice/selectors'

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
