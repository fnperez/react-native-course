import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBoardingClockStep, OnBoardingRoutineStep } from '@/screens'
import SCREENS from './screens'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.welcome}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREENS.welcome} component={OnBoardingClockStep} />
    <Stack.Screen name={SCREENS.secondStep} component={OnBoardingRoutineStep} />
  </Stack.Navigator>
)

export default Router
