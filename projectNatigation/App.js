import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaCadastro from "./TelaCadastro";


const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator>
       
        <Abas.Screen name="Contato" component = { TelaCadastro } />
      
      </Abas.Navigator>
    </NavigationContainer>
  )
};