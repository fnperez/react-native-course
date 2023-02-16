import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SCREENS from './screens'
import { Welcome } from '@/screens'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.welcome}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREENS.welcome} component={Welcome} />
  </Stack.Navigator>
)

export default Router
