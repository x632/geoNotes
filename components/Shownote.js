import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { ArrayContext } from "../context/ArrayContext";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function ShowNote({ id, title, note, date, time, fontsize, fontcolor }) {
  const navigation = useNavigation();
  const { array, setArray, setNote,uidArray,setUidArray } = useContext(ArrayContext);
  const { user } = useContext(AuthContext);
  const [textInputValue, setTextInputValue] = useState(note);


  const getUid = () => {
    // get the (firestore)id, update array with id and note.
    let ind = array.findIndex(function (post) {
      if (post.time === time && post.date === date) {
        return true;
      }
    });
    //add firestore id to note
    let tempArray = [...array];
    tempArray[ind].id = uidArray[ind]
    tempArray[ind].note = note;
    let newId = uidArray[ind]
    setArray(tempArray);
    
    return newId;
  };

    const updateOnFirestore = (newId) =>{
    var theDoc = db
      .collection("users")
      .doc(user.uid)
      .collection("notes")
      .doc(newId);
    return theDoc
      .update({
        note: note,
      })
      .then(function () {
        console.log("Successfully updated note");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
  
  const deleteFromFirestore = (newId) => {
    var theDoc = db
      .collection("users")
      .doc(user.uid)
      .collection("notes")
      .doc(newId);

    theDoc
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{...styles.noteContainer}}>
        <TextInput
          style={{ fontSize: fontsize, color: fontcolor, padding:10 }}
          onChangeText={(text) => setTextInputValue(text)}
          value={textInputValue}
          multiline={true}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableHighlight
          onPress={() => {
            note = textInputValue;
            let newestId = getUid();
            updateOnFirestore(newestId)
            navigation.navigate("Home2");
          }}
        >
          <View style={{ ...button.button, width: 145, height: 40 }}>
            <Text style={{ color: "white", fontSize: 13 }}>
              SAVE EDITED NOTE
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            let newId = getUid();
            deleteFromFirestore(newId);
            let tempArray = array.filter((note) => note.id != newId);
            setArray(tempArray);
            let tempUidArray = uidArray.filter((uidpost) => uidpost != newId);
            setUidArray(tempUidArray);
            navigation.navigate("Home2");
          }}
        >
          <View style={{ ...button.button, width: 145, height: 40 }}>
            <Text style={{ color: "white", fontSize: 13 }}>DELETE NOTE</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    width: "100%",
    backgroundColor: "#3a5f33",
   
    // alignItems: "center",
  },
  noteContainer: {
    width: "95%",
    flex: 0.93,
    borderColor: "#192e19",
    borderRadius: 5,
    borderWidth: 4,
    backgroundColor: "#afc5a0",
    marginStart: 10,
    marginEnd: 10,
    marginTop:10,
    marginBottom:20
  },
});
const button = StyleSheet.create({
  button: {
    backgroundColor: "#302e03",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
});