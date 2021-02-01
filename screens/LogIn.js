
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableHighlight,ImageBackground } from 'react-native';
import {AuthContext} from '../context/AuthContext';
import backgroundPic from '../assets/backgroundPic.jpg'

export default function LogIn({ navigation}) {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [message, setMessage]= useState('');
    const {logIn, createUser,errorMessage, setErrorMessage} = useContext(AuthContext)


    /* useEffect(() => {
      setMessage(errorMessage)
    }, [errorMessage]); */
    
    const submit = () => {
        // navigation.navigate('Home');
        //setIsLoggedIn(true);[}]
        if (email===""|| password ===""){
          setErrorMessage("Error: No fields can be empty")
        }else{
          logIn(email, password)
        console.log("submitting login");
      }
    };
    const register = () =>{
        console.log("submitting register");
        if (email===""|| password ===""){
          setErrorMessage("Error: No fields can be empty")
        }else{
          createUser(email, password);
        console.log("submitting login");
        }
    }
  
  
    return (
        <View style={styles.container}>

          <ImageBackground source={backgroundPic} style={{ width: '100%', height: 400,alignItems: 'center' }}> 
            <View style={{ width: '70%', marginTop: 80 }}>
    
              <TextInput
              placeholder="Enter email"
              value={email}
              keyboardType= 'email-address'
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
                secureTextEntry={true}
                onChangeText={setPassword}

                style={{ backgroundColor: '#e4ece4', padding: 10, borderRadius: 5, marginTop:20, borderWidth: 2 }}
              />
         
            </View>
            </ImageBackground>


          <View style = {styles.new}>
            <View style= {{height:30}}>
               <Text style = {{color: 'red',fontSize:15}}> {errorMessage} </Text> 

            </View>
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