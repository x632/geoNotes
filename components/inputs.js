  
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {View, TextInput, Button, StyleSheet, TouchableHighlight, Text,Picker} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase';
import { AuthContext} from '../context/AuthContext';

export function Inputs ({ array,updateArray}) {

  const {user}= useContext(AuthContext);
    const [note, setNote] = useState({})
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState(15);
    const [selectedColor, setSelectedColor] = useState('Black')
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
      
      <View style = {{ alignItems: 'center'}}>
         <TextInput placeholder="Enter Title"
          value={note.title}
          style={{paddingLeft: 10,fontSize:17, width:'95%',height: 60, 
          borderWidth: 1,backgroundColor: '#afc5a0', borderColor:'black',
          borderRadius:5, borderWidth: 2, marginTop:10}}
          onChangeText={(value) => setNote({ ...note, title: value })}
        />
        <TextInput placeholder="Enter Note"
          value={note.note}
          multiline 
          numberOfLines={4}
          style={{ paddingLeft: 10,fontSize: selectedValue,width:'95%',height: 200,
           backgroundColor: '#afc5a0', borderColor:'black', borderWidth: 1,color: selectedColor,
           borderRadius:5,borderWidth: 2, marginTop:10}}
          onChangeText={(value) => setNote({ ...note, note: value })}
        />
       <TouchableHighlight
              onPress={() => {
              let today = new Date ();
              let dat = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              let tim = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              let id = array.length +1
            
          updateArray([...array, { ...note, id: array.length + 1, date: dat, time: tim, fontcolor: selectedColor, fontsize: selectedValue }]);
          console.log("här är user uid:", user.uid);

          db.collection("users").doc(user.uid).collection("notes").add({
            note: note.note,
            title: note.title,
            date: dat,
            time: tim,
            id: id,
            fontsize: selectedValue,
            fontcolor: selectedColor
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
          navigation.navigate('Home2');
          } 
         }>
        <View style = {{...button.button, width: 200, height: 50, margin: 50}}>
        
          <Text style = {{color:'white'}}>SAVE NOTE</Text>
        </View>
         </TouchableHighlight>

        <View style = {toppart.part}>
          <View>
            <Text style = {{color: 'white'}}>Note textsize</Text>
              <Picker
                selectedValue={selectedValue.toString()}
                style={{ color: 'white', height: 40, width:120}}
                onValueChange={(itemValue, itemIndex) => {setSelectedValue(parseFloat(itemValue))}}
              >
              
              <Picker.Item label="15" value="15" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="30" value="25" />
              </Picker>
          
          </View>
          <View>
            <Text style = {{color: 'white'}}>Note color</Text>
              <Picker
                selectedValue={selectedColor}
                style={{ color: 'white', height: 40, width:120 }}
                onValueChange={(itemValue, itemIndex) => {setSelectedColor(itemValue)}}
              >
              
              <Picker.Item label="Black" value="black" />
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Blue" value="blue" />
              <Picker.Item label="Green" value="green" />
              </Picker>
          
          </View>
         
            
          
        </View>
      </View>
    );
  }

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
  const toppart = StyleSheet.create({
    part: {
      backgroundColor: "#3a5f3a",
     
      //flex: 0.10,
      height:45,
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });