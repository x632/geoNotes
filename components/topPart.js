/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

export function TheTopPart() {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);
  const submit = () => {
    //setIsLoggedIn(false)
    signOut();
  };

  return (
    <View
      style={{
        width: '100%',
        flex: 0.12,
        paddingTop: 13,
        backgroundColor: '#3a5f3a',
      }}
    >
      <View style={toppart.part}>
        <TouchableHighlight onPress={submit}>
          <View style={{ ...button.button, width: 155, height: 45 }}>
            <Text style={{ color: 'white', fontSize: 13 }}>SIGN OUT</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('Add note')}>
          <View style={{ ...button.button, width: 155, height: 45 }}>
            <Text style={{ color: 'white', fontSize: 13 }}>ADD NOTE</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const toppart = StyleSheet.create({
  part: {
    backgroundColor: '#3a5f3a',
    paddingTop: 10,
    //flex: 0.10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

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
