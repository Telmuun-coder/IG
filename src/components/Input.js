import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';


const { width, height } = Dimensions.get("window"); 

const Input = ({options}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...options}/>
        </View>
    )
}
export default Input

const styles = StyleSheet.create({
    container: {
        width: width*.94,
        height: 45,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#DADBDA',
        backgroundColor: '#FAFBFB',
        paddingHorizontal: 10
    },
    input: {
        fontSize: 14
    }
})
