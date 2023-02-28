import React from 'react'
import { View } from 'react-native'
import { Button } from '../DesignSystem'

interface NavigationButtonsProps {
  rightButtonText: string
}

const NavigationButtons = ({ rightButtonText }: NavigationButtonsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        marginBottom: 62,
      }}>
      <Button type="link" title="Back" />
      <Button type="filled" title={rightButtonText} />
    </View>
  )
}

export default NavigationButtons
