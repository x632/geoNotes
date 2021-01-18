import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
 
} from "react-native";

export function TheTopPart({
  array,
  setArray,
  setTextColor,
  setIsBold,
  isBold,
}) {
  return (
    <View
      style={{
        width: "100%",
        flex: 0.22,
        paddingTop: 40,
        backgroundColor: "powderblue",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingStart: 20,
          paddingEnd: 20,
        }}
      >
        <TouchableHighlight onPress={() => setTextColor("red")}>
          <View
            style={{ width: 20, height: 20, backgroundColor: "red" }}
          ></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setTextColor("blue")}>
          <View
            style={{ width: 20, height: 20, backgroundColor: "blue" }}
          ></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setTextColor("green")}>
          <View
            style={{ width: 20, height: 20, backgroundColor: "green" }}
          ></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setTextColor("yellow")}>
          <View
            style={{ width: 20, height: 20, backgroundColor: "yellow" }}
          ></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setTextColor("black")}>
          <View
            style={{ width: 20, height: 20, backgroundColor: "black" }}
          ></View>
        </TouchableHighlight>
      </View>

      <View style={toppart.part}>
        <Button
          title="Delete Last Item"
          onPress={() => {
            let arrayCopy = array.slice();
            arrayCopy.splice(arrayCopy.length - 1, 1);
            setArray(arrayCopy);
          }}
        />

        <Button
          title="Bold toggle"
          onPress={() => {
            setIsBold(!isBold);
          }}
        />

        <Button
          title="Add Item"
          onPress={() => {
            setArray([
              ...array,
              {
                id: array.length + 1,
                title: "restaurant",
                note: "jag var här idag",
                tag: "Huddinge",
              },
            ]);
          }}
        />
      </View>
    </View>
  );
}


const toppart = StyleSheet.create({
  part: {
    backgroundColor: "powderblue",
    paddingTop: 20,
    //flex: 0.10,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
