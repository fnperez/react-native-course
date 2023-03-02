import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SCREENS from './screens'
import { OnBoarding, Welcome } from '@/screens'
import theme from '@/theme'
const Stack = createNativeStackNavigator()

const RootNavigator = () => (
  //   TODO: Add user

  // push -> poner por arriba otra pantalla
  // replace -> reemplaza la actual
  // pop -> go back
  // navigate

  <Stack.Navigator
    initialRouteName={SCREENS.ONBOARDING}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREENS.ONBOARDING} component={OnBoarding} />
    <Stack.Screen
      name={SCREENS.WELCOME}
      component={Welcome}
      options={{
        headerShown: true,
        headerTintColor: theme.colors.white,
        headerTitle: '',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}
    />
  </Stack.Navigator>
)

export default RootNavigator
