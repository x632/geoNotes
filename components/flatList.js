import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from "expo-status-bar";
import React, { useState,useContext, useEffect} from "react";
import {View, FlatList} from "react-native";
import {ItemComponent} from './itemComponent.js'
import {ArrayContext} from '../context/ArrayContext';
import {db} from '../firebase';
import { AuthContext} from '../context/AuthContext';


export function MyFlatList () {

  const {array, setArray} = useContext(ArrayContext) 
  const {user}= useContext(AuthContext);
  let noteArray = [];
  let idArray =[];
  useEffect(() => {
    db.collection("users").doc(user.uid).collection("notes").orderBy("date", "asc").get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let note = doc.data();
          console.log("this should be the entire note: ", note);
          idArray.push(doc.id);
          let timestamp = note.date;
          let newTime = `${timestamp.toDate()}`;
          let lastTime = newTime.slice(0,10);
          note = {...note,date : lastTime};
          noteArray.push(note)
          
      });
      console.log('detta är id arrayn: ', idArray)
     setArray(noteArray);
  }) 
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  })
}, [])

    return (
      <View style={{ width: '93%', flex: 0.85, borderColor : '#192e19', borderRadius:5, borderWidth: 4}}>
      <FlatList
        data={array}
        renderItem={({item}) =><ItemComponent id = {item.id} title = {item.title} note = {item.note} date = {item.date} time = {item.time} fontcolor={item.fontcolor} fontsize = {item.fontsize} />}
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