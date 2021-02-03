/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import { TheTopPart } from '../components/topPart.js';
import { MyFlatList } from '../components/flatList.js';
import React from 'react';


export default function Home2() {

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
    backgroundColor: '#3a5f3a',
    alignItems: 'center',
  },
});
