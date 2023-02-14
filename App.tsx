import React from 'react'
import { View } from 'react-native'
import Logo from './src/components/DesignSystem/Logo/Logo'

const App = () => (
  <View style={{ backgroundColor: '#FFF' }}>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </View>
  </View>
)

export default App
