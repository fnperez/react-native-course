import React from 'react'
import type { ParamListBase } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Button } from '@/ds'
import { useTheme } from '@/ds/contexts'
import Typography from '@/ds/Typography/Typography'
import {
  BottomButtonStyle,
  ImageStyle,
  TextStyle,
  TopButtonStyle,
} from '@/screens/OnBoarding/Style'

interface OnboardingStepProps {
  image: React.ReactNode
  title: string
  description: string
  nextScreen: string
}

const OnBoardingStep = ({
  image,
  title,
  description,
  nextScreen,
}: OnboardingStepProps) => {
  const { theme } = useTheme()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <View style={{ backgroundColor: theme.surface, flex: 1 }}>
      <View style={TopButtonStyle.button}>
        <Button
          type={'link'}
          title={'SKIP'}
          onPress={() => console.log('onpress')}
        />
      </View>

      <View style={ImageStyle.image}>{image}</View>

      <View style={TextStyle.text}>
        <Typography
          type="description"
          style={{ color: theme.font.color }}
          visible={true}>
          - - -
        </Typography>
      </View>

      <View style={TextStyle.text}>
        <Typography
          type="title"
          style={{ color: theme.font.color }}
          visible={true}>
          {title}
        </Typography>

        <Typography
          type="description"
          style={{ color: theme.font.color, marginTop: 25 }}
          visible={true}>
          {description}
        </Typography>
      </View>

      <View style={BottomButtonStyle.container}>
        <Button
          type={'link'}
          title={'BACK'}
          onPress={() => console.log('onpress')}
        />
        <Button
          type={'filled'}
          title={'NEXT'}
          onPress={() => navigation.navigate(nextScreen)}
        />
      </View>
    </View>
  )
}

export default OnBoardingStep
