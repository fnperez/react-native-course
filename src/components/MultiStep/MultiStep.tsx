import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Actions,
  Dot,
  DotsContainer,
  Next,
  StepContainer,
  StepHeader,
} from './Styles'
import type { ContainerProps, StepProps } from '.'
import { Link } from '@/styles/button'
import { Container as StyledContainer } from '@/styles/wrapper'

const Step = ({ header, gap, dots, children }: StepProps) => (
  <>
    <StepHeader>{header && header()}</StepHeader>

    {dots && dots}
    <StepContainer gap={gap} center noPadding>
      {children}
    </StepContainer>
  </>
)

const Container = ({
  children,
  nextText = 'Next',
  submitText = 'Get Started',
  onFinished,
}: ContainerProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [step, setStep] = useState<React.ReactElement | null>(null)

  useEffect(() => {
    setStep(Array.isArray(children) ? children[currentStep] : children)
  }, [currentStep, children])

  const handleNextPress = useCallback(() => {
    if (onFinished && currentStep === children.length - 1) {
      onFinished()

      return
    }

    setCurrentStep(currentStep + 1)
  }, [onFinished, currentStep, children])

  const Dots = useMemo(
    () =>
      Array.isArray(children) && (
        <DotsContainer>
          {children.map((_, index) => (
            <Dot key={index} active={index === currentStep} />
          ))}
        </DotsContainer>
      ),
    [children, currentStep],
  )

  return (
    <StyledContainer center>
      {step && React.cloneElement(step, { dots: Dots })}

      <Actions>
        {currentStep !== 0 && (
          <Link onPress={() => setCurrentStep(currentStep - 1)}>Back</Link>
        )}
        <Next onPress={handleNextPress}>
          {currentStep === children.length - 1 ? submitText : nextText}
        </Next>
      </Actions>
    </StyledContainer>
  )
}

export default {
  Container,
  Step,
}
