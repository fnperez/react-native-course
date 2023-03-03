import React from 'react'
import type { Props } from './types'
import SCREENS from '@/src/navigation/screens'
import { Filled, Outline } from '@/styles/button'
import { ContentText, Title } from '@/styles/text'
import { BottomContainer, Container, SafeContainer } from '@/styles/wrapper'

const Welcome = ({ navigation }: Props) => (
  <SafeContainer>
    <Container>
      <Container gap={28} noPadding>
        <Title align="center">Welcome to UpTodo</Title>
        <ContentText align="center">
          Please login to your account or create new account to continue
        </ContentText>
      </Container>

      <BottomContainer gap={28}>
        <Filled onPress={() => navigation.navigate(SCREENS.LOGIN)}>
          Login
        </Filled>
        <Outline onPress={() => navigation.navigate(SCREENS.REGISTER)}>
          create account
        </Outline>
      </BottomContainer>
    </Container>
  </SafeContainer>
)

export default Welcome
