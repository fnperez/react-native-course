import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../theme'

const LoaderContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000a0;
  z-index: 2;
  align-items: center;
  justify-content: center;
`

const Loader = ({ size = 'large' }: { size?: 'small' | 'large' }) => (
  <LoaderContainer>
    <ActivityIndicator
      size={size ?? 'small'}
      color={theme.colors.primary}
      animating
    />
  </LoaderContainer>
)

export default Loader
