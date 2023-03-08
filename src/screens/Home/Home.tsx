import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/src/store'
import { logout } from '@/src/features/data/authSlice/authSlice'
import { selectLoggedUser } from '@/src/features/data/authSlice/selectors'
import { Filled } from '@/src/styles/button'
import { Title } from '@/src/styles/text'
import { Container, SafeContainer } from '@/src/styles/wrapper'

const Home = () => {
  const dispatch = useAppDispatch()
  const loggedUser = useSelector(selectLoggedUser)

  return (
    <SafeContainer>
      <Container>
        <Title>Hello {loggedUser.email}!</Title>

        <Filled onPress={() => dispatch(logout())}>Logout</Filled>
      </Container>
    </SafeContainer>
  )
}
export default Home
