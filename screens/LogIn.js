
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {AuthContext} from '../context/AuthContext';


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
       
        <View style={{ width: '70%' }}>
          <Text style={{ fontWeight: '600', fontSize: 16, paddingBottom: 10 }}>Email</Text>
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            style={{
              backgroundColor: '#e4ece4',
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ fontWeight: '600', fontSize: 16, paddingBottom: 10 }}>Password</Text>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            style={{ backgroundColor: '#e4ece4', padding: 10, borderRadius: 5 }}
          />
           <View style = {{ width: '100%', marginTop: 50}}>
          <Button title="Register and login" onPress={register} />
          </View>
          <View style = {{width: '100%',marginTop: 40}}>
          <Button title="Login" onPress={submit} />
          </View>
         
        </View>
      </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1.0,
      backgroundColor: '#c3efc3',
      alignItems: 'center',
      justifyContent: 'center',
    },
});