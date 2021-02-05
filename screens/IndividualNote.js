/* eslint-disable prettier/prettier */

import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ArrayContext } from '../context/ArrayContext';
import { ShowNote } from '../components/ShowNote';

export function IndividualNote({ route }) {
  const { id, title, note, date, time, fontsize, fontcolor } = route.params;
  const {} = useContext(ArrayContext);
  return (
    <View style={styles.mainContainer}>
      <ShowNote
        note={note}
        fontsize={fontsize}
        fontcolor={fontcolor}
        id={id}
        title={title}
        time={time}
        date={date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#3a5f33',
    alignItems: 'center',
  },
});
