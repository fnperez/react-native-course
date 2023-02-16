import { StyleSheet } from 'react-native'
import type { ITheme } from '../contexts/ThemeContext'

interface StyleProps {
  theme: ITheme
  active: boolean
}

export const defaultStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#FFFFFF',
  },
  icon: {
    color: '#FFFFFF',
  },
})

export const FilledStyle = ({ theme: { button }, active }: StyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: active ? '#8687E7AF' : '#8687E7',
      borderRadius: button.rounding,
    },
  })

export const OutlineStyle = ({ theme: { button }, active }: StyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderColor: active ? '#8687E7AF' : '#8687E7',
      borderWidth: 2,
      borderRadius: button.rounding,
    },
  })

export const LinkStyle = ({ active }: StyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    title: {
      color: active ? '#FFFFFFA0' : '#FFFFFF',
    },
  })
