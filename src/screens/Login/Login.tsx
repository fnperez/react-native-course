import React from 'react'
import SCREENS from '../../navigation/screens'
import TextInput from '../../styles/inputs'
import useLogin from '../../presenters/Login/useLogin'
import { Props } from './types'
import { Filled, Link } from '../../styles/button'
import { ContentText, Title } from '../../styles/text'
import { TextProps } from 'react-native-svg'
import { Field, Form } from 'react-final-form'
import {
  BottomContainer,
  Container,
  InnerContainer,
  SafeContainer,
} from '../../styles/wrapper'

const Login = ({ navigation }: Props) => {
  const presenter = useLogin()

  return (
    <SafeContainer>
      <Container noPadding>
        <InnerContainer>
          <Title>Login</Title>
        </InnerContainer>

        <Form
          onSubmit={presenter.onSubmit}
          validate={presenter.validate}
          validateOnBlur={false}
          render={({ handleSubmit }) => (
            <InnerContainer gap={69}>
              <InnerContainer noPadding gap={25}>
                <Field name="email">
                  {({ input, meta }) => (
                    <TextInput
                      {...(input as TextProps)}
                      label="Email"
                      autoCapitalize="none"
                      error={meta.touched ? meta.error : null}
                    />
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <TextInput
                      {...(input as TextProps)}
                      label="Password"
                      secureTextEntry
                      autoCapitalize="none"
                      error={meta.touched ? meta.error : null}
                    />
                  )}
                </Field>
              </InnerContainer>

              <Filled case="none" onPress={handleSubmit}>
                Login
              </Filled>
            </InnerContainer>
          )}
        />

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
