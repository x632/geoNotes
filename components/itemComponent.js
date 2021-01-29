import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {View, Text, TouchableHighlight} from "react-native";
import { useNavigation } from '@react-navigation/native';

export function ItemComponent ({id, title, note, date,time, textColor, isBold}) {
  
  const navigation = useNavigation();
let myString = note.substring(0,40) + '...';

  return (
    <TouchableHighlight onPress={() => navigation.navigate('Individual Note',{id, title, note,date,time,textColor,isBold})}>
    <View style={{ width: '100%', height: 80, backgroundColor: '#afc5a0', borderColor:'black'}}>
      <View style= {{flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, paddingRight: 10, paddingTop:5}}>
        <Text style= {{ color: textColor, fontWeight:  'normal', fontSize: 12 }}>
        Date: {date}</Text>
        <Text style= {{ color: textColor, fontWeight: 'normal', fontSize: 12 }}>
        Time: {time}</Text>
        </View>

      <Text style= {{ textAlign: 'center', color: textColor, fontWeight: isBold? 'bold':'normal',fontSize:18 }}>
        {title}</Text>
      <Text style= {{ textAlign: 'center', color: textColor, fontWeight: isBold? 'bold':'normal' }}>
        {myString}</Text>
    
     
    </View>
  </TouchableHighlight>
    
    
    
  )
  
}
