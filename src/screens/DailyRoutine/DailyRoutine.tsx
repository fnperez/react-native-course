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
  DailyRoutineImage,
} from './index'

const DailyRoutine = () => {
  const navigation = useNavigation()
  const popAction = StackActions.pop(1)

  return (
    <Container>
      <SkipButton />

      <DisplayImage image={<DailyRoutineImage />} />

      <ProgressDashes />

      <Typography type="title">Create daily routine</Typography>

      <Typography type="description">
        In Uptodo you can create your personalized routine to stay productive
      </Typography>

      <NavigationButtons
        rightButtonText="Next"
        nextButtonAction={() =>
          navigation.dispatch(StackActions.push(SCREENS.organizeTasks))
        }
        goBackAction={() => navigation.dispatch(popAction)}
      />
    </Container>
  )
}

export default DailyRoutine
