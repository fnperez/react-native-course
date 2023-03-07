import React from 'react'
import theme from './theme'
import RootNavigator from './navigation/RootNavigator'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  </StoreProvider>
)

export default App
