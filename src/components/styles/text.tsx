import styled from 'styled-components/native'
import type { Theme } from '../../theme'
import type { ThemeProps } from 'styled-components'

type DefaultProps = {
  case: 'none' | 'uppercase' | 'lowercase'
  color?: string
  align?: 'center' | 'left' | 'right'
} & ThemeProps<Theme>

const defaultProps = (props: DefaultProps) => ({
  color: props.color || props.theme.colors.white || `#FFFFFF`,
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
