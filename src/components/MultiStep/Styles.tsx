import type { ThemeProps } from 'styled-components'
import styled from 'styled-components'
import { Filled } from '@/styles/button'
import { Container } from '@/styles/wrapper'
import type { Theme } from '@/theme'

export const StepHeader = styled.View`
  height: 300px;
  justify-content: center;
`
export const StepContainer = styled(Container)`
  justify-content: center;
`

export const DotsContainer = styled.View(() => ({
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: 10,
  marginTop: 32,
}))

export const Dot = styled.View(
  (props: ThemeProps<Theme> & { active: boolean }) => ({
    width: 33,
    borderWidth: 4,
    borderColor: props.active
      ? props.theme.colors.white
      : props.theme.colors.gray,
    borderRadius: 100,
  }),
)

export const Actions = styled.View(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 'auto',
  width: '100%',
  alignItems: 'center',
}))

export const Next = styled(Filled)`
  margin-left: auto;
`
