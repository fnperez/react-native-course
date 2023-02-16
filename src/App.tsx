import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from '@/navigation/RootNavigator'
import { ThemeContainer } from '@/ds/contexts/ThemeContext'

const App = () => (
  <ThemeContainer>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </ThemeContainer>
)
export default App
