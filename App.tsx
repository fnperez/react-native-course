import React from 'react'
import theme from './src/theme'
import RootNavigator from './src/navigation/RootNavigator'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </ThemeProvider>
)

export default App
