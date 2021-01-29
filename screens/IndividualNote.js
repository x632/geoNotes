import React, { useState, useContext } from "react";
import {View, TextInput, Button, StyleSheet,Text} from "react-native";
import {ArrayContext} from './Home2'

export function IndividualNote({route}) {
    const {id, title,note,date,time,fontsize,fontcolor} = route.params;
    //const {array,isBold,textColor} = useContext(ArrayContext) 
    return (
      <View style={styles.mainContainer}>
        <View style={styles.noteContainer}>
        <Text style ={{padding: 5, color: fontcolor, fontSize: fontsize}}>In the individual component  {note} </Text>
        </View>
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