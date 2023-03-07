import React from 'react'
import TextInput from '../../styles/inputs'
import SCREENS from '../../navigation/screens'
import { Props } from './types'
import { Filled, Link } from '../../styles/button'
import { ContentText, Title } from '../../styles/text'
import {
  BottomContainer,
  Container,
  InnerContainer,
  SafeContainer,
} from '../../styles/wrapper'

const Login = ({ navigation }: Props) => {
  return (
    <SafeContainer>
      <Container noPadding>
        <InnerContainer>
          <Title>Login</Title>
        </InnerContainer>

        <InnerContainer gap={69}>
          <InnerContainer noPadding gap={25}>
            <TextInput label="Username" />
            <TextInput label="Password" />
          </InnerContainer>

          <Filled case="none">Login</Filled>
        </InnerContainer>

        <BottomContainer center dir="row" paddingBottom={20} gap={5}>
          <ContentText>Don't have an account?</ContentText>
          <Link
            case="none"
            onPress={() => navigation.navigate(SCREENS.REGISTER)}>
            Register
          </Link>
        </BottomContainer>
      </Container>
    </SafeContainer>
  )
}

export default Login
