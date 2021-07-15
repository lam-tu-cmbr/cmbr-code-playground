import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { First } from '../screens/First';
import { Second } from '../screens/Second';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen name="First" component={First}></Stack.Screen>
      <Stack.Screen name="Second" component={Second}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
