import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SlidePuzzle from './screens/SlidePuzzle';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SlidePuzzle" component={SlidePuzzle} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;