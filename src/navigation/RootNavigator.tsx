import React from 'react'
import SCREENS from './screen'
import { Welcome } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={ SCREENS.welcome }
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ SCREENS.welcome } component={ Welcome } />
  </Stack.Navigator>
)

export default Router