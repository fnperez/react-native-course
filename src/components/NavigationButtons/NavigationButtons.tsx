import React from 'react'
import { View } from 'react-native'
import { Button } from '../DesignSystem'

interface NavigationButtonsProps {
  rightButtonText: string
  nextButtonAction?: any
  goBackAction?: any
}

const NavigationButtons = ({
  rightButtonText,
  nextButtonAction,
  goBackAction,
}: NavigationButtonsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        marginBottom: 62,
      }}>
      <Button type="link" title="Back" onPress={goBackAction} />
      <Button
        type="filled"
        title={rightButtonText}
        onPress={nextButtonAction}
      />
    </View>
  )
}

export default NavigationButtons
