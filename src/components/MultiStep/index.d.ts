import type { PropsWithChildren, React } from 'react'

export interface StepProps extends PropsWithChildren {
  header?: () => React.Element
  dots?: React.Element
  gap?: number
}

export interface ContainerProps extends PropsWithChildren {
  children: React.ReactElement<StepProps> | React.ReactElement<StepProps>[]
  nextText?: string
  submitText?: string
  onFinished: () => void
}