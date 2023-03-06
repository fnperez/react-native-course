import React from 'react'
import { Field, Form } from 'react-final-form'
import type { TextProps } from 'react-native'
import type { Props } from './types'
import SCREENS from '@/src/navigation/screens'
import useLogin from '@/src/presenters/Login/useLogin'
import { Filled, Link } from '@/styles/button'
import TextInput from '@/styles/inputs'
import { ContentText, Title } from '@/styles/text'
import {
  BottomContainer,
  Container,
  InnerContainer,
  SafeContainer,
} from '@/styles/wrapper'

const Login = ({ navigation }: Props) => {
  const presenter = useLogin()

  return (
    <SafeContainer>
      <Container noPadding>
        <InnerContainer>
          <Title>Login</Title>
        </InnerContainer>

        <Form onSubmit={presenter.onSubmit} validate={presenter.formValidator}>
          {({ handleSubmit }) => (
            <InnerContainer gap={69}>
              <InnerContainer noPadding gap={25}>
                <Field name="email">
                  {({ input, meta }) => (
                    <TextInput
                      {...(input as TextProps)}
                      error={meta.touched ? meta.error : undefined}
                      autoCapitalize="none"
                      label="Email"
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <TextInput
                      {...(input as TextProps)}
                      error={meta.touched ? meta.error : undefined}
                      autoCapitalize="none"
                      secureTextEntry
                      label="Password"
                    />
                  )}
                </Field>
              </InnerContainer>

              <Filled case="none" onPress={handleSubmit}>
                Login
              </Filled>
            </InnerContainer>
          )}
        </Form>

        <BottomContainer center dir="row" gap={5}>
          <ContentText>Don’t have an account?</ContentText>
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
