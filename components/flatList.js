import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from "expo-status-bar";
import React, { useState,useContext, useEffect} from "react";
import {View, FlatList} from "react-native";
import {ItemComponent} from './itemComponent.js'
import {ArrayContext} from '../context/ArrayHandelingContext';
import {db} from '../firebase';
import { AuthContext} from '../context/AuthContext';
import { set } from "react-native-reanimated";

export function MyFlatList () {

  const {array,isBold,textColor, setArray} = useContext(ArrayContext) 
  const {user}= useContext(AuthContext);
  let noteArray = [];
  useEffect(() => {
    db.collection("users").doc(user.uid).collection("notes").orderBy("id", "asc").get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          
          let note = doc.data();
          console.log("this should be the entire note: ", note);
          noteArray.push(note)
      });
     setArray(noteArray);
  }) 
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  })
  
  
}, [])

    return (

      <View style={{ width: '93%', flex: 0.85, borderColor : '#192e19', borderWidth: 4}}>
      <FlatList
        data={array}
        renderItem={({item}) =><ItemComponent id = {item.id} title = {item.title} note = {item.note} date = {item.date} time = {item.time} textColor={textColor} isBold = {isBold} />}
        ItemSeparatorComponent={() => {
          return (
             <View
               style={{ height: 2, width: '100%', backgroundColor: '#264526' }}
             ></View>
           );
       }}
        keyExtractor = {(item) => item.id.toString()}
      />
      </View>

    );
}