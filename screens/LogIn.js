/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import backgroundPic from '../assets/backgroundPic.jpg';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, createUser, errorMessage, setErrorMessage } = useContext(
    AuthContext
  );

  const submit = () => {
    if (email === '' || password === '') {
      setErrorMessage('Error: No fields can be empty');
    } else {
      logIn(email, password);
      console.log('submitting login');
    }
  };
  const register = () => {
    console.log('submitting register');
    if (email === '' || password === '') {
      setErrorMessage('Error: No fields can be empty');
    } else {
      createUser(email, password);
      console.log('submitting login');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPic} style={styles.image}>
        <View style={{ width: '70%', marginTop: 80 }}>
          <TextInput
            placeholder="Enter email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            style={styles.email}
          />

          <TextInput
            placeholder="Enter password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            style={styles.password}
          />
        </View>
      </ImageBackground>

      <View style={styles.new}>
        <View style={styles.styly1}>
          <Text style={styles.style2}> {errorMessage} </Text>
        </View>
        <TouchableHighlight onPress={register}>
          <View style={{ ...button.button, width: 200, height: 40 }}>
            <Text style={{ color: 'white' }}>REGISTER</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={submit}>
          <View style={{ ...button.button, width: 200, height: 40 }}>
            <Text style={{ color: 'white' }}>LOGIN</Text>
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
  },
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
    justifyContent: 'space-evenly',
  },
  email: {
    marginTop: 40,
    backgroundColor: '#e4ece4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 2,
  },
  password: {
    backgroundColor: '#e4ece4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: 400,
    alignItems: 'center',
  },
  styly1: {
    height: 30,
  },
  style2: {
    color: 'red',
    fontSize: 15,
  },
});
