
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import React from 'react';
Splash 

export default function Splash() {
    
    return (
      <View style={styles.mainContainer}>
        <Text style = {{fontSize:20, color:'white'}}>The great noteapp is loading...</Text>
        <ActivityIndicator animating = {true} />
      </View>
    )
  };


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: '#3a5f3a',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });