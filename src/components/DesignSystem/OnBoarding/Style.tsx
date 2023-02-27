import { StyleSheet } from 'react-native'

export const ImageStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 278,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
})

export const TopButtonStyle = StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginRight: 'auto',
  },
})

export const TextStyle = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    textAlign: 'center',
  },
})

export const BottomButtonStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 25,
  },
})
