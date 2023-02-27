import React from 'react'
import { Text } from 'react-native'
import { useTheme } from '@/ds/contexts'

export interface TypographyProps {
  type: 'title' | 'description' | 'helper' | 'normal'
  children: React.ReactNode
  visible: boolean
  style?: any
}

const STYLE_HASH = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  helper: {
    fontSize: 14,
  },
  normal: {
    fontSize: 15,
  },
}

const Typography = ({ type, children, style }: TypographyProps) => {
  const { theme } = useTheme()
  return (
    <Text style={[STYLE_HASH[type], theme.font.color, style]}>{children}</Text>
  )
}

export default Typography
