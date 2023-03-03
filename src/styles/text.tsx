import type { ThemeProps } from 'styled-components'
import styled from 'styled-components/native'
import type { Theme } from '@/theme'

export type DefaultProps = {
  color?: keyof Theme['colors']
  align?: 'center' | 'left' | 'right'
  case?: 'none' | 'uppercase' | 'lowercase'
} & ThemeProps<Theme>

const defaultProps = (props: DefaultProps) => ({
  color: props.theme.colors[props.color || 'white'] || '#FFFFFF',
  textAlign: props.align,
  textTransform: props.case,
})

export const Title = styled.Text<DefaultProps>(props => ({
  ...defaultProps(props),
  fontSize: 32,
  fontWeight: 'bold',
}))

export const ContentText = styled.Text<DefaultProps>(props => ({
  ...defaultProps(props),
  fontSize: 16,
}))
