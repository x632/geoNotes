/* eslint-disable prettier/prettier */
import { AddNote } from '../screens/addNote.js';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home2 from '../screens/Home2.js';
import { IndividualNote } from '../screens/IndividualNote.js';

const Stack = createStackNavigator();

export default function AuthenticatedStack() {
  return (
    <Stack.Navigator initialRouteName="Home2">
      <Stack.Screen
        name="Home2"
        component={Home2}
        options={{
          title: 'GeoNotes',
          headerStyle: { backgroundColor: '#837f20' },
        }}
      />
      <Stack.Screen
        name="Add note"
        component={AddNote}
        options={{
          title: 'Add note',
          headerStyle: { backgroundColor: '#837f20' },
        }}
      />
      <Stack.Screen
        name="Individual Note"
        component={IndividualNote}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: { backgroundColor: '#837f20' },
        })}
      />
    </Stack.Navigator>
  );
}
