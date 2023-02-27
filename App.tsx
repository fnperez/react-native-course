import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeContainer } from '@/ds/contexts/ThemeContext'
import { Router } from '@/navigation'

const App = () => (
  <ThemeContainer>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </ThemeContainer>
)
export default App
