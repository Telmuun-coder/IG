import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated,{ 
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler
 } from 'react-native-reanimated';
 import { createStackNavigator } from '@react-navigation/stack';
 import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}


 const AuthStack = createStackNavigator();

 function MyAuthStack() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="Signin" 
        component={Signin} 
        options={{
          headerShown: false
        }}
      />
      <AuthStack.Screen 
        name="Signup" 
        component={Signup} 
        options={{
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  );
}

const App = () => {
 
  return (
     <NavigationContainer>
       <MyAuthStack/>
     </NavigationContainer>
  );
};


export default App;
