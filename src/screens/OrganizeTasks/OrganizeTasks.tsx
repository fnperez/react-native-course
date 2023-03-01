import React from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'

import {
  Container,
  Typography,
  DisplayImage,
  NavigationButtons,
  ProgressDashes,
  SkipButton,
  OrganizeTasksImage,
} from './index'

const OrganizeTasks = () => {
  const navigation = useNavigation()
  const popAction = StackActions.pop(1)

  return (
    <Container>
      <SkipButton />

      <DisplayImage image={<OrganizeTasksImage />} />

      <ProgressDashes />

      <Typography type="title">Organize your tasks</Typography>

      <Typography type="description">
        You can organize your daily tasks by adding your tasks into separate
        categories
      </Typography>

      <NavigationButtons
        rightButtonText="Next"
        goBackAction={() => navigation.dispatch(popAction)}
      />
    </Container>
  )
}

export default OrganizeTasks
