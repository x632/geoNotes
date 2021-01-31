import {Inputs} from '../components/inputs.js';
import React, { useState, useContext } from "react";
import {View, TextInput, Button, StyleSheet} from "react-native";
import {ArrayContext} from '../context/ArrayContext';

export function AddNote({route}) {
    
   const{array, setArray} = useContext(ArrayContext);
  
    return (
      <View style={styles.mainContainer}>
        <Inputs /> 
      </View>
    )
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: '#3a5f3a',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
});