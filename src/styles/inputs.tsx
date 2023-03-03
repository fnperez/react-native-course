import React from 'react'
import type { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import { ContentText } from './text'

const BaseTextInput = styled.TextInput`
  border-color: ${props => props.theme.colors.gray};
  border-width: 1px;
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  padding-vertical: ${props => props.theme.paddings.input.vertical}px;
  padding-horizontal: ${props => props.theme.paddings.input.horizontal}px;
  border-radius: ${props => props.theme.rounding}px;
`

const Container = styled.View<{ showingError: boolean }>`
  gap: 5px;
  margin-bottom: ${props => (props.showingError ? -22 : 0)}px;
`

const TextInput = ({
  label,
  error,
  ...props
}: TextInputProps & { label?: string; error?: string }) => (
  <Container showingError={!!error}>
    {label && <ContentText>{label}</ContentText>}
    <BaseTextInput {...props} />
    {error && <ContentText color="error">{error}</ContentText>}
  </Container>
)
export default TextInput
