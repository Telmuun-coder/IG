import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated,{ 
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler
 } from 'react-native-reanimated';



const App = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));
  
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
     console.log("taping");
    },
    onActive: (event, ctx) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    onEnd: (event, ctx) => {
    
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  useEffect(()=>{
    setTimeout(()=>{
      translateX.value = withSpring(100);
      translateY.value = withSpring(100);
    },2000)

  },[])
  return (
    <SafeAreaView style={styles.container}>
      <Text>INSTAGRAM</Text>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.dot, animatedStyles]}/>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width:50,
    height:50,
    borderRadius: 30,
    backgroundColor: 'purple'
  }
});

export default App;
