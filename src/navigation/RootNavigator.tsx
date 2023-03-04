import React from 'react'
import SCREENS from './screen'
import OnBoarding from '../screens/OnBoarding/OnBoarding'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.ONBOARDING}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.ONBOARDING} component={OnBoarding} />
    {/* <Stack.Screen name={SCREENS.welcome} component={Welcome} /> */}
  </Stack.Navigator>
)

export default RootNavigator
