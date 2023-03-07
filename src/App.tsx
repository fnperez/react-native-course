import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import RootNavigator from '@/navigation/RootNavigator'
import Layout from './components/Layout/Layout'
import { store } from './store'
import theme from './theme'

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Layout>
          <RootNavigator />
        </Layout>
      </NavigationContainer>
    </ThemeProvider>
  </StoreProvider>
)

export default App
