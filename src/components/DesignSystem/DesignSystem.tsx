import { useTheme } from './contexts/ThemeContext'
import React from 'react'
import { View } from 'react-native'
import { Button, Logo } from '.'

const DesignSystem = () => {
	const { theme } = useTheme()
	const log = () => console.log('Button Pressed')
	
	return(
		<View style={{ backgroundColor: theme.surface, flex: 1 }}>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
			<Logo size='sm'/>
			<Logo size='md'/>
			<Logo size='lg'/>
			</View>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
			<Button
					onPress={ log }
					icon='android'
					type='filled' 
					title='Filled btn'
			/>
			<Button 
					onPress={ log }
					type='outline' 
					title='Outline btn'
			/>
			<Button 
					onPress={ log }
					type='link' 
					title='Link btn'
			/>
			</View>
	</View>
	)
}

export default DesignSystem