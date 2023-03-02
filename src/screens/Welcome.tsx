import React from 'react'
import { Filled, Outline } from '@/styles/button'
import { ContentText, Title } from '@/styles/text'
import { BottomContainer, Container, SafeContainer } from '@/styles/wrapper'

const Welcome = () => (
  <SafeContainer>
    <Container>
      <Container gap={28} noPadding>
        <Title align="center">Welcome to UpTodo</Title>
        <ContentText align="center">
          Please login to your account or create new account to continue
        </ContentText>
      </Container>

      <BottomContainer gap={28}>
        <Filled>Login</Filled>
        <Outline>create account</Outline>
      </BottomContainer>
    </Container>
  </SafeContainer>
)

export default Welcome
