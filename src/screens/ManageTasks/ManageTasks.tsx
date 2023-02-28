import React from 'react'

import {
  Container,
  Typography,
  DisplayImage,
  NavigationButtons,
  ProgressDashes,
  SkipButton,
} from './index'

const ManageTasks = () => {
  return (
    <Container>
      <SkipButton />

      <DisplayImage />

      <ProgressDashes />

      <Typography type="title">Manage Your Tasks</Typography>

      <Typography type="description">
        You can easily manage all of your daily tasks in DoMe for free
      </Typography>

      <NavigationButtons rightButtonText="Next" />
    </Container>
  )
}

export default ManageTasks
