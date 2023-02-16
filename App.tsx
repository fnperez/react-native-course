import React from 'react';
import { View } from 'react-native'
import Button from './src/components/DesignSystem/Button/Button';
import Logo from './src/components/DesignSystem/Logo/Logo'

const App = () => (
  <View style={{ backgroundColor: '#1D1D1D', flex: 1 }}>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Logo size='sm'/>
      <Logo size='md'/>
      <Logo size='lg'/>
    </View>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button
          onPress={() => console.log('Button Filled Pressed')} 
          icon='android'
          type='filled' 
          title='Filled btn'
      />
      <Button 
          onPress={() => console.log('Button Outline Pressed')} 
          type='outline' 
          title='Outline btn'
      />
      <Button 
          onPress={() => console.log('Button Link Pressed')} 
          type='link' 
          title='Link btn'
      />
    </View>
  </View>
)

export default App;
