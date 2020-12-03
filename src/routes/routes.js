import React from 'react';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { Home } from '../pages/Home';
import { Leitor } from '../pages/Leitor';


const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Leitor" component={Leitor}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}