import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import  LogIn from '../screens/LogIn.js'


const Stack = createStackNavigator();


export default function UnauthenticatedStack() {
  return (
    <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LogIn} 
       options = {{ 
         headerStyle: {backgroundColor: '#837f20'} 
        }}
        />
    </Stack.Navigator>
    );
}