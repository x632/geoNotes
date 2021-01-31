import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { StyleSheet, View, Button, TouchableHighlight, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import {ArrayContext} from '../context/ArrayContext';


export function TheTopPart() {
  
  const navigation = useNavigation();
  const {array,setArray} = useContext(ArrayContext)
  const {setIsLoggedIn, signOut} = useContext(AuthContext)
  const submit = () => {
    //setIsLoggedIn(false)
    signOut();
  };
  //const navigation = useNavigation();
  
  return (
    <View
      style={{
        width: "100%",
        flex: 0.12,
        paddingTop: 13,
        backgroundColor: "#3a5f3a",
      }}>
     

      <View style={toppart.part}>
        <TouchableHighlight onPress = {submit}>
           <View style = {{...button.button, width : 100, height : 40}}>
              <Text style = {{color: 'white', fontSize: 13}}>SIGN OUT</Text>
           </View>
        </TouchableHighlight>
      
        <TouchableHighlight onPress={() => {
            setArray(array.slice(0, array.length - 1));
          }}>
           <View style = {{...button.button, width : 140, height : 40}}>
              <Text style = {{color: 'white', fontSize: 13}}>DELETE LAST ITEM</Text>
           </View>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={()  => navigation.navigate('Add note'/* , {array, setArray} */)}>
           <View style = {{...button.button, width : 110, height : 40}}>
              <Text style = {{color: 'white', fontSize: 13}}>ADD NOTE</Text>
           </View>
        </TouchableHighlight>

        {/* <Button
          title="Add note"
          onPress={() => navigation.navigate('Add note', {array, setArray})}
             setArray([...array,
              {id: array.length + 1,
                title: "restaurant",
                note: "jag var här idag",
                tag: "Huddinge"
              },
            ]); 
          }}
        /> */}
      </View>
    </View>
  );
}


const toppart = StyleSheet.create({
  part: {
    backgroundColor: "#3a5f3a",
    paddingTop: 10,
    //flex: 0.10,
    height:45,
    flexDirection: "row",
    justifyContent: "space-around",
  },
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