import React from 'react'
import { Text } from 'react-native'
import Style from './Style'

export interface TypographyProps {
  type: 'title' | 'description' | 'helper' | 'normal'
  children: React.ReactNode

  style?: any
  visible?: boolean
}

const STYLE_HASH = {
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    marginRight: 38,
    marginLeft: 38,
  },
  helper: {
    fontSize: 14,
  },
  normal: {
    fontSize: 15,
  },
}

const Typography = ({ type, children, style }: TypographyProps) => (
  <Text style={[STYLE_HASH[type], Style.container, style]}>{children}</Text>
)

export default Typography
