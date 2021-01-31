
import { ActivityIndicator, StyleSheet, View, Text,ImageBackground } from 'react-native';
import React from 'react';
import backgroundPic from '../assets/backgroundPic.jpg'
Splash 

export default function Splash() {
    
    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={backgroundPic} style={{ width: '100%', height: 400,alignItems: 'center' }}> 
            <View style={{ width: '70%', marginTop: 80 }}>
            <Text style = {{fontSize:20, color:'white'}}>The great noteapp is loading...</Text>
            </View>
        </ImageBackground>
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