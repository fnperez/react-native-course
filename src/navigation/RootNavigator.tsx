import React from 'react'
import SCREENS from './screen'
import { DailyRoutine, ManageTasks, OrganizeTasks } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Router = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.manageTasks}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.manageTasks} component={ManageTasks} />
    <Stack.Screen name={SCREENS.dailyRoutine} component={DailyRoutine} />
    <Stack.Screen name={SCREENS.organizeTasks} component={OrganizeTasks} />
  </Stack.Navigator>
)

export default Router
