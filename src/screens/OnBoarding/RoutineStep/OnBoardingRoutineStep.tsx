import React from 'react'
import { OnBoardingStep } from '@/ds'
import { RoutineImage } from '@/illustrations'
import { SCREENS } from '@/navigation'

const OnBoardingRoutineStep = () => (
  <OnBoardingStep
    title="Create daily routine"
    description="In Uptodo you can create your personalized routine to stay productive"
    image={<RoutineImage />}
    onBack={SCREENS.welcome}
    onNext={SCREENS.secondStep}
  />
)

export default OnBoardingRoutineStep
