import React, { useContext, useState } from 'react'

export interface ITheme {
	surface: string, 
	button: {
		rounding: number
	}
}

export interface IThemeContext {
	theme : ITheme,
	setTheme: React.Dispatch<React.SetStateAction<ITheme>>
}

export const ThemeContext = React.createContext<IThemeContext>( 
	{} as IThemeContext
) 

export const useTheme = (): IThemeContext => {
	const theme = useContext(ThemeContext)

	return theme
}

export const ThemeProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
	const [theme, setTheme] = useState<ITheme>({
		surface: '#1D1D1D',
		button: {
			rounding: 4
		}
	})

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{ children }
		</ThemeContext.Provider>
	)
}