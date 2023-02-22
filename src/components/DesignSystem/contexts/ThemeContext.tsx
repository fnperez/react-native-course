import React, { useContext, useState } from 'react'

export interface ITheme {
  surface: string
  button: {
    rounding: number
  }
  font: {
    color: string
  }
}

export interface IThemeContext {
  theme: ITheme
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>
}

export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext,
)

export const useTheme = (): IThemeContext => useContext(ThemeContext)

export const ThemeContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  const [theme, setTheme] = useState<ITheme>({
    surface: '#121212',
    button: {
      rounding: 4,
    },
    font: {
      color: '#FFFFFF',
    },
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
