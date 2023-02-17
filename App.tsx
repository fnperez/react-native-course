import React from 'react'
import Router from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeContainer } from './src/components/DesignSystem/contexts/ThemeContext'

const App = () => (
  <ThemeContainer>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </ThemeContainer>
)

export default App
