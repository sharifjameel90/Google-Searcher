import React from 'react';
import App from '../screens/App'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Searcher from '../screens/Searcher';
import Start from '../screens/Start'
export default function Main() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" options={{headerShown: false}} component={Start} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={App} />
        <Stack.Screen name="Searcher" options={{headerShown: false}} component={Searcher} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
