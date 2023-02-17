import React, { useState } from 'react'
import { Pressable, Text } from 'react-native'
import { DefaultStyle, OutlineStyle, LinkStyle, FilledStyle } from './Style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from '../contexts/ThemeContext'

export interface ButtonProps {
  type: 'filled' | 'outline' | 'link'
  title: string
  onPress: (e: any) => void

  icon?: string
  testID?: string
}

const STYLE_HASH: Record<ButtonProps['type'], any> = {
  filled: FilledStyle,
  outline: OutlineStyle,
  link: LinkStyle 
}

const Button = ({ type, title, onPress, icon, testID }: ButtonProps) => {
  const { theme } = useTheme()
  
  const [isActive, setIsActive] = useState(false)
  
  const { 
    container: containerStyle,
    title: titleStyle,
    icon: iconStyle,
  } = STYLE_HASH[type]({ theme, active: isActive })

  return (
    <Pressable 
      style={[ DefaultStyle.container, containerStyle ]} 
      onPress={ onPress }
      onPressIn={ () => setIsActive(true) }
      onPressOut={ () => setIsActive(false) }
      testID={ testID }>
      { icon && (
        <Icon 
          name={ icon } 
          size={ 30 } 
          color={ iconStyle?.color ?? DefaultStyle.icon.color } 
        />
      )}
      <Text style={[ DefaultStyle.title, titleStyle ]}>
        { title }
      </Text>
    </Pressable>
  )
}

export default Button
