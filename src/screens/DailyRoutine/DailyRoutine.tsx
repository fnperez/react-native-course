import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Button,
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

  return (
    <Container>
      <SkipButton />

      <DisplayImage image={<DailyRoutineImage />} />

      <ProgressDashes />

      <Typography type="title">Create daily routine</Typography>

      <Typography type="description">
        In Uptodo you can create your personalized routine to stay productive
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
        <Button
          type="link"
          title="Back" /* onPress={navigation.navigate(SCREENS.manageTasks)} */
        />
        <Button type="filled" title="Next" />
      </View>
    </Container>
  )
}

export default DailyRoutine
