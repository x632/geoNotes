/* eslint-disable prettier/prettier */
import { Inputs } from '../components/inputs.js';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export function AddNote({}) {
  return (
    <View style={styles.mainContainer}>
      <Inputs />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#3a5f3a',
  },
});
