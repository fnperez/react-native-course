import React from 'react'
import theme from '../../theme'
import SCREENS from '../../navigation/screen'
import { Props } from './types'
import { ContentText, Title } from '../../styles/text'
import { Filled, Outline } from '../../styles/button'
import { SafeContainer, Container, BottomContainer } from '../../styles/wrapper'

const Welcome = ({ navigation }: Props) => {
  return (
    <SafeContainer>
      <Container>
        <Container noPadding gap={28}>
          <Title align="center">Welcome to UpTodo</Title>
          <ContentText align="center" color={theme.colors.gray}>
            Please login to your account or create new account to continue
          </ContentText>
        </Container>

        <BottomContainer gap={28}>
          <Filled
            onPress={() => {
              navigation.navigate(SCREENS.LOGIN)
            }}>
            LOGIN
          </Filled>
          <Outline
            onPress={() => {
              navigation.navigate(SCREENS.REGISTER)
            }}>
            CREATE ACCOUNT
          </Outline>
        </BottomContainer>
      </Container>
    </SafeContainer>
  )
}

export default Welcome
