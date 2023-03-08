import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SCREENS from './screens'
import type { UnauthenticatedNavigatorParamList } from './types'
import { Login, OnBoarding, Register, Welcome } from '@/screens'
import theme from '@/theme'

const Stack = createNativeStackNavigator<UnauthenticatedNavigatorParamList>()

const UnauthenticatedNavigator = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.ONBOARDING}
    screenOptions={{
      headerShown: true,
      headerTintColor: theme.colors.white,
      headerTitle: '',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: theme.colors.surface,
      },
    }}>
    <Stack.Screen
      name={SCREENS.ONBOARDING}
      component={OnBoarding}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
    <Stack.Screen name={SCREENS.LOGIN} component={Login} />
    <Stack.Screen name={SCREENS.REGISTER} component={Register} />
  </Stack.Navigator>
)

export default UnauthenticatedNavigator
