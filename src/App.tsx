import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import RootNavigator from '@/navigation/RootNavigator'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </ThemeProvider>
)

export default App
