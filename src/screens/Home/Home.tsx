import { useSelector } from 'react-redux'
import { Title } from '../../styles/text'
import { Filled } from '../../styles/button'
import { useAppDispatch } from '../../store'
import { Container, SafeContainer } from '../../styles/wrapper'
import { logout } from '../../features/data/authSlice/authSlice'
import { selectLoggedUser } from '../../features/data/authSlice/selectors'

const Home = () => {
  const dispatch = useAppDispatch()
  const loggedUser = useSelector(selectLoggedUser)

  return (
    <SafeContainer>
      <Container>
        <Title>Hello {loggedUser.email}!</Title>

        <Filled
          onPress={() => {
            dispatch(logout())
          }}>
          Logout
        </Filled>
      </Container>
    </SafeContainer>
  )
}

export default Home
