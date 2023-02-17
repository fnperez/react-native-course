import { StyleSheet } from 'react-native'

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

export const FilledStyle = (active: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: active ? '#8687E7AF' : '#8687E7',
      borderRadius: 4,
    },
  })

export const OutlineStyle = (active: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderColor: active ? '#8687E7AF' : '#8687E7',
      borderWidth: 2,
      borderRadius: 4,
    },
  })

export const LinkStyle = (active: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    title: {
      color: active ? '#FFFFFFA0' : '#FFFFFF',
    },
  })
