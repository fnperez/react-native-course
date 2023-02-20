import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeContainer } from './src/components/DesignSystem/contexts'
import Router from './src/navigation/RootNavigator'

const App = () => (
  <ThemeContainer>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </ThemeContainer>
)
export default App
