import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Typography,
  DisplayImage,
  NavigationButtons,
  ProgressDashes,
  SkipButton,
  SCREENS,
  View,
  Button,
  ManageTasksImage,
} from './index'

const ManageTasks = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <SkipButton />

      <DisplayImage image={<ManageTasksImage />} />

      <ProgressDashes />

      <Typography type="title">Manage your tasks</Typography>

      <Typography type="description">
        You can easily manage all of your daily tasks in DoMe for free
      </Typography>

      {/* <NavigationButtons
        rightButtonText="Next"
        onPress={() => navigation.navigate(SCREENS.dailyRoutine)}
      /> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 'auto',
          marginBottom: 62,
        }}>
        <Button type="link" title="Back" />
        <Button
          type="filled"
          title="Next"
          onPress={() => navigation.navigate(SCREENS.dailyRoutine)}
        />
      </View>
    </Container>
  )
}

export default ManageTasks
