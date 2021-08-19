import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>

          <View style={styles.item}>
              {/* This is where task will go*/}
              <Task text={'Tast 1'}/>
              <Task text={'Tast 2'}/>
              <Task text={'Tast 3'}/>

          </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  item: {
    marginTop: 30,
  },
});
