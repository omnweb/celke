import React from 'react'
import { Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orcamento from './pages/Orcamento'

const Stack = createStackNavigator();


export default function Routes() {
    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#2E4359'
        },
        headerTintColor: '#B0C4D9',
        headerBackTitle: 'Voltar'
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen
                    name="Orcamento"
                    component={Orcamento}
                    options={{
                        headerTitle: 'Orçamento'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}