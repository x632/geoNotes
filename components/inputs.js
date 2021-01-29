import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {View, TextInput, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase';
import { AuthContext} from '../context/AuthContext';

export function Inputs ({ array,updateArray}) {

  const {user}= useContext(AuthContext);
    const [note, setNote] = useState({})
    const navigation = useNavigation();

    const logIn = async(email, password) =>{
      console.log("calling log in");

     try{ 
      await auth.signInWithEmailAndPassword(email, password);
          console.log("log in ");
          setIsLoggedIn(true);
      } catch (error) {
          console.log("Error: ",error);
      }
  };
    return (
      
      <View>
         <TextInput placeholder="Enter Title"
          value={note.title}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(value) => setNote({ ...note, title: value })}
        />
        <TextInput placeholder="Enter Note"
          value={note.note}
          multiline
        numberOfLines={4}
          style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(value) => setNote({ ...note, note: value })}
        />
       
  
        <Button title="Save Note"
          onPress={
            () => {
              let today = new Date ();
              let dat = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              let tim = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              let id = array.length +1
          updateArray([...array, { ...note, id: array.length + 1, date: dat, time: tim }]);
          console.log("här är user uid:", user.uid);

          db.collection("users").doc(user.uid).collection("notes").add({
            note: note.note,
            title: note.title,
            date: dat,
            time: tim,
            id: id
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
          navigation.navigate('Home2');
          } 
         } />
      </View>
    );
  }
