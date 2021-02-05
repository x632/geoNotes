/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrayContext } from '../context/ArrayContext';

export function ItemComponent({
  id,
  title,
  note,
  date,
  time,
  fontcolor,
  fontsize,
}) {
  const navigation = useNavigation();
  const { showColor } = useContext(ArrayContext);

  let myString = note.substring(0, 40) + '...';

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Individual Note', {
          id,
          title,
          note,
          date,
          time,
          fontcolor,
          fontsize,
        })
      }
    >
      <View style={styles.four}>
        <View style={styles.yetanother}>
          <Text style={styles.small}>Date: {date}</Text>
          <Text style={styles.small}>Time: {time}</Text>
        </View>

        <Text style={styles.another}>{title}</Text>
        <Text
          style={{
            textAlign: 'center',
            color: showColor ? 'black' : fontcolor,
            fontWeight: 'normal',
          }}
        >
          {myString}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  small: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 12,
  },
  another: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'normal',
    fontSize: 18,
  },
  yetanother: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  four: {
    width: '100%',
    height: 80,
    backgroundColor: '#afc5a0',
    borderColor: 'black',
  },
});
