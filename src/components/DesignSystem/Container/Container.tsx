import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../contexts/ThemeContext'

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

const Container = ({ children }: ContainerProps) => {
  const { theme } = useTheme()

  return (
    <View style={{ backgroundColor: theme.surface, flex: 1 }}>{children}</View>
  )
}
export default Container
