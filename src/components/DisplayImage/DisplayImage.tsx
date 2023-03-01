import React from 'react'
import { View } from 'react-native'

const DisplayImage = ({ image }: any) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {image}
    </View>
  )
}

export default DisplayImage
