import React from 'react'
import SCREENS from './screen'
import { ManageTasks } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.manageTasks}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.manageTasks} component={ManageTasks} />
  </Stack.Navigator>
)

export default Router
