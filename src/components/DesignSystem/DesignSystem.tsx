import React from 'react'
import { View } from 'react-native'
import { useTheme } from './contexts/ThemeContext'
import { Button, Logo } from '.'

const DesignSystem = () => {
  const { theme } = useTheme()

  const callback = () => console.log('button press')

  return (
    <View style={{ backgroundColor: theme.surface, flex: 1 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button
          onPress={callback}
          icon="like"
          type="filled"
          title="Filled btn"
        />
        <Button onPress={callback} type="outline" title="Outline btn" />
        <Button onPress={callback} type="link" title="Link btn" />
      </View>
    </View>
  )
}

export default DesignSystem
