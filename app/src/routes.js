import React from 'react'
import { Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orcamento from './pages/Orcamento'

const Stack = createStackNavigator();


export default function Routes() {
    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#486A8C'
        },
        headerTintColor: '#B0C4D9'
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Orcamento" component={Orcamento} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}