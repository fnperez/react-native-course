import React from 'react'
import { FirstImage } from '@/ds'
import { SCREENS } from '@/navigation'
import OnboardingStep from '@/screens/OnBoarding/OnBoardingStep'

const FirstStep = () => (
  <OnboardingStep
    title="Manage your tasks"
    description="You can easily manage all of your daily tasks in DoMe for free"
    image={<FirstImage />}
    nextScreen={SCREENS.secondStep}
  />
)

export default FirstStep
