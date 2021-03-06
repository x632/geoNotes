/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ItemComponent } from './itemComponent.js';
import { ArrayContext } from '../context/ArrayContext';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

export function MyFlatList() {
  const { array, setArray, setUidArray } = useContext(ArrayContext);
  const { user } = useContext(AuthContext);
  let noteArray = [];
  let idArray = [];
  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('notes')
      .orderBy('date', 'asc')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let note = doc.data();
          idArray.push(doc.id); //creating firestore idArray
          let timestamp = note.date;
          let newTime = `${timestamp.toDate()}`;
          let lastTime = newTime.slice(0, 10);
          note = { ...note, date: lastTime };
          noteArray.push(note);
        });
        setArray(noteArray);
        setUidArray(idArray);
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.part}>
      <FlatList
        data={array}
        renderItem={({ item }) => (
          <ItemComponent
            id={item.id}
            title={item.title}
            note={item.note}
            date={item.date}
            time={item.time}
            fontcolor={item.fontcolor}
            fontsize={item.fontsize}
          />
        )}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ height: 2, width: '100%', backgroundColor: '#264526' }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  part: {
    width: '93%',
    flex: 0.85,
    borderColor: '#192e19',
    borderRadius: 5,
    borderWidth: 4,
  },
});
