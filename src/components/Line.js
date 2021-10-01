import React from 'react'
import { View } from 'react-native'

const Line = ({style}) => {
    return (
        <View 
            style={[{
                flex: 1,
                height: 0.5,
                backgroundColor: '#DADBDA'
            }, style]}
        />
    )
}

export default Line;
