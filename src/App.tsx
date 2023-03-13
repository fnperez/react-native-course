import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import RootNavigator from '@/navigation/RootNavigator'
import Layout from './components/Layout/Layout'
import client from './services/client'
import { store } from './store'
import theme from './theme'

const App = () => (
  <StoreProvider store={store}>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Layout>
            <RootNavigator />
          </Layout>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  </StoreProvider>
)

export default App
