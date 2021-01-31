  
import { StyleSheet, View } from 'react-native';
import {TheTopPart} from '../components/topPart.js';
import {MyFlatList} from '../components/flatList.js';
import React, { useState, createContext } from "react";
import {ArrayContext} from '../context/ArrayContext';

export default function Home2() {
    
    
    const [array, setArray] = useState([]);
    const [textColor, setTextColor] = useState('black')
    const [isBold, setIsBold] = useState('true')
  
    return (
      <View style={styles.mainContainer}>
  
      <ArrayContext.Provider value = {{array,setArray, textColor, isBold, setIsBold, setTextColor}}>
         <TheTopPart /> 
        <MyFlatList />
        </ArrayContext.Provider>
      </View>
    )
  };
  
  // array={array} textColor={textColor} isBold = {isBold}  



  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: '#3a5f3a',
      alignItems: 'center',
      //justifyContent: 'center',
    },
  });