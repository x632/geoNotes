import React, { useState, useContext } from "react";
import {View, TextInput, Button, StyleSheet,Text, TouchableHighlight} from "react-native";
import {ArrayContext} from './Home2'
import {ShowNote} from '../components/Shownote'

export function IndividualNote({route}) {
    const {id, title,note,date,time,fontsize,fontcolor} = route.params;
    //const {array,isBold,textColor} = useContext(ArrayContext) 
    return (
      <View style={styles.mainContainer}>
        <ShowNote note={note} fontsize={fontsize} fontcolor= {fontcolor} />
      </View> 
    )
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: '#3a5f33',
      alignItems: 'center',
    },
    noteContainer:{
      width: '95%', 
      flex: 0.85, 
      borderColor : '#192e19', 
      borderRadius:5, 
      borderWidth: 4,
      backgroundColor: '#afc5a0',
      marginTop: 10,
    }
});
const button = StyleSheet.create({
  button: {
    backgroundColor: '#302e03',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',

  }
});