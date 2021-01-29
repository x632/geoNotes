import React, { useState, useContext } from "react";
import {View, TextInput, Button, StyleSheet,Text} from "react-native";
import {ArrayContext} from './Home2'

export function IndividualNote({route}) {
    const {id, title,note,date,time,fontsize,fontcolor} = route.params;
    //const {array,isBold,textColor} = useContext(ArrayContext) 
    return (
      <View style={styles.mainContainer}>
        <Text style ={{color: fontcolor, fontSize: fontsize}}>In the individual component {id} {title} {note} {date}, {time}</Text>
      </View>
    )
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: 'green',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
});