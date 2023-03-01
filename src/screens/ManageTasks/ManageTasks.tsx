import React from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'

import {
  Container,
  Typography,
  DisplayImage,
  NavigationButtons,
  ProgressDashes,
  SkipButton,
  SCREENS,
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

      <NavigationButtons
        rightButtonText="Next"
        nextButtonAction={() =>
          navigation.dispatch(StackActions.push(SCREENS.dailyRoutine))
        }
      />
    </Container>
  )
}

export default ManageTasks
