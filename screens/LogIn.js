
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableHighlight,ImageBackground } from 'react-native';
import {AuthContext} from '../context/AuthContext';
import backgroundPic from '../assets/backgroundPic.jpg'

export default function LogIn({ navigation}) {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {logIn, createUser} = useContext(AuthContext)

    const submit = () => {
        // navigation.navigate('Home');
        //setIsLoggedIn(true);
        console.log("submitting login");
        logIn(email, password);
    };
    const register = () =>{
        console.log("submitting register");
        createUser(email, password);
    }
  
  
    return (
        <View style={styles.container}>

          <ImageBackground source={backgroundPic} style={{ width: '100%', height: 400,alignItems: 'center' }}> 
            <View style={{ width: '70%', marginTop: 80 }}>
    
              <TextInput
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              style={{
              marginTop: 40,
              backgroundColor: '#e4ece4',
              padding: 10,
              borderRadius: 5,
              marginBottom: 10, borderWidth: 2,
              }}
              />
        
              <TextInput
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                style={{ backgroundColor: '#e4ece4', padding: 10, borderRadius: 5, marginTop:20, borderWidth: 2 }}
              />
         
            </View>
            </ImageBackground>

          <View style = {styles.new}>
            <TouchableHighlight onPress = {register}>
              <View style = {{...button.button, width : 200, height : 40}}>
                <Text style = {{color: 'white'}}>REGISTER</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress = {submit}>
              <View style = {{...button.button, width : 200, height : 40}}>
                <Text style = {{color: 'white'}}>LOGIN</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
  );
}

const button = StyleSheet.create({
  button: {
    backgroundColor: '#302e03',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
  }
});

const styles = StyleSheet.create({
    container: {
      flex: 1.0,
      backgroundColor: '#3a5f3a',
      alignItems: 'center',
      
    },
    new: {
      flex: 1.0,
      backgroundColor: '#3a5f3a',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent:'space-evenly',
    },
});