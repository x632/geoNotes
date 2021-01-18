import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Image, TouchableHighlight, SectionList, FlatList } from 'react-native';
import {TheTopPart} from './TopPart.js';




const MyFlatList = ({ array, textColor, isBold }) => {
  
    return (

      <View style={{paddingTop : 40, width: '100%'}}>
      <FlatList
        data={array}
        renderItem={({item}) =><ItemComponent id = {item.id} title = {item.title} note = {item.note} tag = {item.tag} textColor={textColor} isBold = {isBold} />}
       keyExtractor = {(item) => item.id.toString()}
     />
    </View>

);
}

const ItemComponent = ({id, title, note, tag, textColor, isBold}) => {

  return (

  <Text style= {{ textAlign: 'center', color: textColor, fontWeight: isBold? 'bold':'normal' }}>
    {id.toString()} {title} {note} {tag}</Text>
  
    )
}
    
    
      
     /* <ImageBackground
      source={require('./assets/icon.png')}
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}
    >
      {array.map((value, index) => (
        <Text style=
        {{ textAlign: 'center', color: textColor, fontWeight: isBold? 'bold':'normal' }} 
        key={index}>
          title {value.title}, Note: {value.note}, Place {value.tag}
        </Text>
      ))}
    </ImageBackground>
   */


const Inputs = ({ array, setArray}) => {

  const [note, setNote] = useState({})
  
  return (
    
    <View>
       <TextInput placeholder="Enter Title"
        value={note.title}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(value) => setNote({ ...note, title: value })}
      />
      <TextInput placeholder="Enter Note"
        value={note.note}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(value) => setNote({ ...note, note: value })}
      />
      <TextInput placeholder="Enter place"
        value={note.tag}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(value) => setNote({ ...note, tag: value })}
      /> 

      <Button title="Save Note"
        onPress={
          () => 
          { note.id = array.length+1; setArray([...array, note]) }} />
    </View>
  );
}



export default function App() {
  const theArray = [
    {id: 1, title: 'restaurant', note: 'Andreas var här idag', tag: 'Huddinge'  },
    {id: 2, title: 'restaurant', note: 'Jakob var här idag', tag: 'Älvsjö'  },
    {id: 3, title: 'restaurant', note: 'Janne var här idag', tag: 'Stockholm'  },
  ];
  
  const [array, setArray] = useState(theArray)
  const [textColor, setTextColor] = useState('black')
  const [isBold, setIsBold] = useState('true')
  return (
    <View style={styles.mainContainer}>

        <TheTopPart array={array} setArray={setArray} textColor={textColor} 
      setTextColor={setTextColor} setIsBold = {setIsBold} isBold = {isBold}
      />
      <Inputs array={array} setArray={setArray}/>
      <MyFlatList array={array} textColor={textColor} isBold = {isBold} /> 
      
   
    </View>
  )
};

const inputSheet = StyleSheet.create({
  inputs: {
    backgroundColor: 'blue',
    height: 30,
    flexDirection: 'column'
  },
  smallBlue: {
    paddingStart: 30,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

const header = StyleSheet.create({
  header: {
    backgroundColor: 'powderblue',
    paddingTop: 20,
    //flex: 0.10, 
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bigBlue: {
    paddingStart: 30,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bigRed: {
    paddingEnd: 30,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },

});


const listView = StyleSheet.create({
  theView: {
    backgroundColor: 'powderblue',
    paddingTop: 30,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  anotherBlue: {
    paddingStart: 20,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
  },
  anothergRed: {
    paddingEnd: 20,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },

});



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  listContainer: {
    flex: 1.0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  }
});

