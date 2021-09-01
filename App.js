import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/components/Login';
import Inicio from './src/components/Inicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
