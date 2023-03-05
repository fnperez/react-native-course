type colors = {
  surface: string
  white: string
  dark: string
  primary: string
  primaryLight: string
  gray: string
  error: string
}

type paddings = {
  container: { vertical: number; horizontal: number }
  button: { vertical: number; horizontal: number }
  input: { vertical: number; horizontal: number }
}

export interface Theme {
  colors: colors
  paddings: paddings
  rounding: number
}

const theme: Theme = {
  colors: {
    surface: '#121212',

    white: '#FFFFFF',
    dark: '#000000',

    primary: '#8875FF',
    primaryLight: '#8875E0',
    gray: '#CCC',
    error: '#E71D36'
  },
  paddings: {
    container: {
      vertical: 14,
      horizontal: 28,
    },
    button: {
      vertical: 12,
      horizontal: 24,
    },
    input: {
      vertical: 12,
      horizontal: 21,
    }
  },
  rounding: 4,
}

export default theme
