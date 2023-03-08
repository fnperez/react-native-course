import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SCREENS from './screens'
import type { AuthenticatedNavigatorParamList } from './types'
import { Home } from '@/screens'
import theme from '@/theme'

const Stack = createNativeStackNavigator<AuthenticatedNavigatorParamList>()

const AuthenticatedNavigator = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.HOME}
    screenOptions={{
      headerShown: true,
      headerTintColor: theme.colors.white,
      headerTitle: '',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: theme.colors.surface,
      },
    }}>
    <Stack.Screen name={SCREENS.HOME} component={Home} />
  </Stack.Navigator>
)

export default AuthenticatedNavigator
