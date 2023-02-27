import React from 'react'
import { OnBoardingStep } from '@/ds'
import { ClockImage } from '@/illustrations'
import { SCREENS } from '@/navigation'

const OnBoardingClockStep = () => (
  <OnBoardingStep
    title="Manage your tasks"
    description="You can easily manage all of your daily tasks in DoMe for free"
    image={<ClockImage />}
    onBack={SCREENS.welcome}
    onNext={SCREENS.secondStep}
  />
)

export default OnBoardingClockStep
