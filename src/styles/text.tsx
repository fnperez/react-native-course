import styled from 'styled-components/native'
import type { Theme } from '../theme'
import type { ThemeProps } from 'styled-components'

export type DefaultProps = {
  color?: keyof Theme['colors']
  case?: 'none' | 'uppercase' | 'lowercase'
  align?: 'center' | 'left' | 'right'
} & ThemeProps<Theme>

const defaultProps = (props: DefaultProps) => ({
  color: props.theme.colors[props.color || 'white'] || `#FFFFFF`,
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
