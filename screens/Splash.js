/* eslint-disable prettier/prettier */
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import React from 'react';
import backgroundPic from '../assets/backgroundPic.jpg';
Splash;

export default function Splash() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={backgroundPic}
        style={styles.pic}>
        <View style={styles.style3}>
          <Text style={styles.style4}>
            The great noteapp is loading...
          </Text>
        </View>
      </ImageBackground>
      <ActivityIndicator animating={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#3a5f3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic:{
    width: '100%',
    height: 400,
    alignItems: 'center',
  },
  style3:{
    width: '70%',
    marginTop: 80,
  },
  style4:{
    width: '70%',
    marginTop: 80,
  },
});
