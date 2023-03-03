import React from 'react'
import type { Props } from './types'
import SCREENS from '@/src/navigation/screens'
import { Filled, Link } from '@/styles/button'
import TextInput from '@/styles/inputs'
import { ContentText, Title } from '@/styles/text'
import {
  BottomContainer,
  Container,
  InnerContainer,
  SafeContainer,
} from '@/styles/wrapper'

const Register = ({ navigation }: Props) => (
  <SafeContainer>
    <Container noPadding>
      <InnerContainer>
        <Title>Register</Title>
      </InnerContainer>

      <InnerContainer gap={69}>
        <InnerContainer noPadding gap={25}>
          <TextInput label="Username" />
          <TextInput label="Password" />
        </InnerContainer>

        <Filled case="none">Register</Filled>
      </InnerContainer>

      <BottomContainer center dir="row" gap={5}>
        <ContentText>Already have an account?</ContentText>
        <Link case="none" onPress={() => navigation.navigate(SCREENS.LOGIN)}>
          Login
        </Link>
      </BottomContainer>
    </Container>
  </SafeContainer>
)

export default Register
