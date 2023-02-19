import { StyleSheet } from 'react-native'
import { ITheme } from '../contexts/ThemeContext'

interface StyleProps {
  theme: ITheme
  active: boolean
}

export const DefaultStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
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
      marginRight: 24,
    },
  })

export const OutlineStyle = ({ theme: { button }, active }: StyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#transparent',
      borderColor: active ? '#8687E7AF' : '#8687E7',
      borderRadius: button.rounding,
      borderWidth: 2,
    },
  })

export const LinkStyle = ({ active }: StyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#transparent',
      borderWidth: 0,
    },
    title: {
      color: active ? '#FFFFFFA0' : '#FFFFFF',
    },
  })
