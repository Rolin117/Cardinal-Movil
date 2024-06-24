import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/login';
import Registro from '../Screens/registro';
import Recuperacion from '../Screens/recuperacion-contra';
import CambioContra from '../Screens/cambio-contra';
import DatosU from '../Screens/datos-usuario';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="registro" component={Registro} />
      <Stack.Screen name="recuperacion-contra" component={Recuperacion} />
      <Stack.Screen name="cambio-contra" component={CambioContra} />
      <Stack.Screen name="datos-usuario" component={DatosU} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}