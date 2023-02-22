import React from 'react'
import { SecondImage } from '@/ds'
import { SCREENS } from '@/navigation'
import OnboardingStep from '@/screens/OnBoarding/OnBoardingStep'

const SecondStep = () => (
  <OnboardingStep
    title="Create daily routine"
    description="In Uptodo you can create your personalized routine to stay productive"
    image={<SecondImage />}
    nextScreen={SCREENS.secondStep}
  />
)

export default SecondStep
