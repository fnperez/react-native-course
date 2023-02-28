import React from 'react'
import { View } from 'react-native'
import { Button } from '../DesignSystem'

const SkipButton = () => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 25 }}>
      <Button type="link" title="Skip" />
    </View>
  )
}

export default SkipButton
