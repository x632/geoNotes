import {Inputs} from '../components/inputs.js';
import React, { useState } from "react";
import {View, TextInput, Button, StyleSheet} from "react-native";


export function AddNote({route}) {
    const {array,setArray} = route.params;
   
    return (
      <View style={styles.mainContainer}>
        <Inputs array={array} updateArray={setArray}/> 
      </View>
    )
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
});