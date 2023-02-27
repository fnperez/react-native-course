import React, { useState } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { defaultStyle, FilledStyle, LinkStyle, OutlineStyle } from './Style'

export interface ButtonProps {
  type: 'filled' | 'outline' | 'link'
  title: string
  onPress: (e: any) => void

  style?: StyleProp<ViewStyle>
  icon?: string
  testID?: string
}

const STYLE_HASH: Record<ButtonProps['type'], any> = {
  filled: FilledStyle,
  outline: OutlineStyle,
  link: LinkStyle,
}

const Button = ({ type, title, style, icon, onPress, testID }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false)

  const {
    container: containerStyle,
    title: titleStyle,
    icon: iconStyle,
  } = STYLE_HASH[type](isActive)

  return (
    <Pressable
      style={[defaultStyle.container, containerStyle, style]}
      onPress={onPress}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      testID={testID}>
      {icon && (
        <Icon
          name={icon}
          size={30}
          color={iconStyle?.color ?? defaultStyle.icon.color}
        />
      )}
      <Text style={[defaultStyle.title, titleStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button
