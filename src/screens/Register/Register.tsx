import React from 'react'
import { Field, Form } from 'react-final-form'
import type { TextProps } from 'react-native'
import type { Props } from './types'
import SCREENS from '@/src/navigation/screens'
import useRegister from '@/src/presenters/Register/useRegister'
import { Filled, Link } from '@/styles/button'
import TextInput from '@/styles/inputs'
import { ContentText, Title } from '@/styles/text'
import {
  BottomContainer,
  Container,
  InnerContainer,
  SafeContainer,
} from '@/styles/wrapper'

const Register = ({ navigation }: Props) => {
  const presenter = useRegister()

  return (
    <SafeContainer>
      <Container noPadding>
        <InnerContainer>
          <Title>Register</Title>
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

                <Field name="confirm">
                  {({ input, meta }) => (
                    <TextInput
                      {...(input as TextProps)}
                      label="Confirm Password"
                      secureTextEntry
                      autoCapitalize="none"
                      error={meta.touched ? meta.error : null}
                    />
                  )}
                </Field>
              </InnerContainer>

              <Filled case="none" onPress={handleSubmit}>
                Register
              </Filled>
            </InnerContainer>
          )}
        />

        <BottomContainer center dir="row" gap={5}>
          <ContentText>Already have an account?</ContentText>
          <Link case="none" onPress={() => navigation.navigate(SCREENS.LOGIN)}>
            Login
          </Link>
        </BottomContainer>
      </Container>
    </SafeContainer>
  )
}
export default Register
