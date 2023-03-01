import React from 'react'
import SCREENS from './screen'
import { ManageTasks } from '../screens'
import DailyRoutine from '../screens/DailyRoutine/DailyRoutine'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.manageTasks}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.manageTasks} component={ManageTasks} />
    <Stack.Screen name={SCREENS.dailyRoutine} component={DailyRoutine} />
  </Stack.Navigator>
)

export default Router
