import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FirstStep, SecondStep } from '@/screens'
import SCREENS from './screens'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.welcome}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREENS.welcome} component={FirstStep} />
    <Stack.Screen name={SCREENS.secondStep} component={SecondStep} />
  </Stack.Navigator>
)

export default Router
