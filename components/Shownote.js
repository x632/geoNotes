import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";


export function ShowNote({ id, title, note, date, time, fontsize, fontcolor }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.noteContainer}>
        <Text style={{ padding: 5, color: fontcolor, fontSize: fontsize }}>
          {note}
        </Text>
      </View>
      <View style={{ flex: 0.15, justifyContent: "center" }}>
        <TouchableHighlight>
          <View style={{ ...button.button, width: 130, height: 40 }}>
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
    width: '100%',
    backgroundColor: "#3a5f33",
    alignItems: "center",
  },
  noteContainer: {
    width: "95%",
    flex: 0.85,
    borderColor: "#192e19",
    borderRadius: 5,
    borderWidth: 4,
    backgroundColor: "#afc5a0",
    marginTop: 10,
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
