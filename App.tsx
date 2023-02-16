import React from 'react'
import { DesignSystem } from './src/components/DesignSystem'
import { ThemeProvider } from './src/components/DesignSystem/contexts/ThemeContext'

const App = () => (
  <ThemeProvider>
    <DesignSystem />
  </ThemeProvider>
)
export default App
