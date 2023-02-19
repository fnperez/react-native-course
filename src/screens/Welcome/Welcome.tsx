import React from 'react'
import { Text, View } from 'react-native'
import { Button, Logo } from '../../components/DesignSystem'
import {
  bottomButtonsStyle,
  containerStyle,
  imageStyle,
  textStyle,
  topButtonStyle,
} from './Style'

//To Do After Vacations: split file into many components

const Welcome = () => {
  return (
    <View style={containerStyle.container}>
      <View style={topButtonStyle.button}>
        <Button
          type="link"
          title="Skip"
          onPress={() => console.log('Skip button')}
        />
      </View>

      <View style={imageStyle.image}>
        <Logo />
      </View>

      <Text style={textStyle.principal}>- - -</Text>

      <Text style={textStyle.principal}>Colita Abusada</Text>

      <Text style={textStyle.description}>
        You can easily manage all of your daily tasks in DoMe for free
      </Text>

      <View style={bottomButtonsStyle.buttons}>
        <Button
          type="link"
          title="Back"
          onPress={() => console.log('Back button')}
        />
        <Button
          type="filled"
          title="Next"
          onPress={() => console.log('Next button')}
        />
      </View>
    </View>
  )
}

export default Welcome
