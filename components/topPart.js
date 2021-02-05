/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { ArrayContext } from '../context/ArrayContext';

export function TheTopPart() {
  const { showColor, setShowColor } = useContext(ArrayContext);
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);
  const submit = () => {
    //setIsLoggedIn(false)
    signOut();
  };

  return (
    <View style={button.else}>
      <View style={toppart.part}>
        <TouchableHighlight onPress={submit}>
          <View style={{ ...button.button, width: 145, height: 45 }}>
            <Text style={{ color: 'white', fontSize: 13 }}>SIGN OUT</Text>
          </View>
        </TouchableHighlight>
        <Switch
          value={showColor}
          onValueChange={(value) => {
            setShowColor(value);
          }}
        />
        <TouchableHighlight onPress={() => navigation.navigate('Add note')}>
          <View style={{ ...button.button, width: 145, height: 45 }}>
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
  else: {
    width: '100%',
    flex: 0.12,
    paddingTop: 13,
    backgroundColor: '#3a5f3a',
  },
});
