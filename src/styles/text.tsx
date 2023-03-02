import type { ThemeProps } from 'styled-components'
import styled from 'styled-components'
import type { Theme } from '@/theme'

type DefaultProps = {
  color: string
  align: 'center' | 'left' | 'right'
  case: 'none' | 'uppercase' | 'lowercase'
} & ThemeProps<Theme>

const defaultProps = (props: DefaultProps) => ({
  color: props.color || props.theme.colors.white || '#FFFFFF',
  textAlign: props.align,
  textTransform: props.case,
})

export const Title = styled.Text((props: DefaultProps) => ({
  ...defaultProps(props),
  fontSize: 32,
  fontWeight: 'bold',
}))

export const ContentText = styled.Text((props: DefaultProps) => ({
  ...defaultProps(props),
  fontSize: 16,
}))
