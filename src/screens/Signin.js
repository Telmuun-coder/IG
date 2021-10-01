import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Button from '../components/Button';

const Signin = () => {
    const [state, setState] = useState({
        username: '',
        password: ''
    });
    
    const signin = () => {
        console.log(state);
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#FEFEFF'}}>
            {/* <StatusBar backgroundColor={'#FEFEFF'} setBarStyle={}/> */}
            <View style={styles.container}>
                <Image source={require('../assets/instagram.png')} style={styles.image}/>
                <Input options={{
                    onChangeText: (username) => setState(prev => ({...prev,username})),
                }}/>
                <Input options={{
                    onChangeText: (password) => setState(prev => ({...prev,password})),
                }}/>
                <Button title={'Log In'} onPress={signin}/>
            </View>
        </SafeAreaView>
    )
}

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 70
    }
})
