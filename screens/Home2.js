import { StyleSheet, View } from "react-native";
import { TheTopPart } from "../components/topPart.js";
import { MyFlatList } from "../components/flatList.js";
import React, { useState, createContext, useContext } from "react";
import { ArrayContext } from "../context/ArrayContext";

export default function Home2() {
  //  const {array, setArray} = useContext(ArrayContext);

  return (
    <View style={styles.mainContainer}>
      <TheTopPart />
      <MyFlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    backgroundColor: "#3a5f3a",
    alignItems: "center",
    //justifyContent: 'center',
  },
});