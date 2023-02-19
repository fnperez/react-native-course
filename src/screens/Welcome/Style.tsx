import { StyleSheet } from 'react-native'

//To Do After Vacations: split file into many files

export const containerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
})

export const imageStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 278,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
})

export const textStyle = StyleSheet.create({
  principal: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 32,
    marginTop: 20,
  },

  description: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 50,
    marginRight: 38,
    marginLeft: 38,
  },
})

export const topButtonStyle = StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginTop: 25,
  },
})

export const bottomButtonsStyle = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 62,
  },
})
