import React from 'react'
import type { ParamListBase } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Button, Container, Typography } from '@/ds'
import {
  BottomButtonStyle,
  ImageStyle,
  TextStyle,
  TopButtonStyle,
} from './Style'

interface OnboardingStepProps {
  image: React.ReactNode
  title: string
  description: string
  onNext: string
  onBack: string
}

const OnBoardingStep = ({
  image,
  title,
  description,
  onNext,
  onBack,
}: OnboardingStepProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <Container>
      <Button
        style={TopButtonStyle.button}
        type={'link'}
        title={'SKIP'}
        onPress={() => console.log('onpress')}
      />

      <View style={ImageStyle.image}>{image}</View>

      <View style={TextStyle.text}>
        <Typography type="title" visible={true}>
          - - -
        </Typography>

        <Typography type="title" visible={true}>
          {title}
        </Typography>

        <Typography type="description" style={{ marginTop: 20 }} visible={true}>
          {description}
        </Typography>
      </View>

      <View style={BottomButtonStyle.container}>
        <Button
          type={'link'}
          title={'BACK'}
          onPress={() => navigation.navigate(onBack)}
        />
        <Button
          type={'filled'}
          title={'NEXT'}
          onPress={() => navigation.navigate(onNext)}
        />
      </View>
    </Container>
  )
}

export default OnBoardingStep
