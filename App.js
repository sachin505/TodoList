import { StatusBar } from 'expo-status-bar';
//import React, { useState } from 'react';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalsItem from './Components/GoalsItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalview, setModal] = useState(false)
  let i = 0;
  const addGoal = (goaltitle) => {
    setCourseGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: goaltitle }])
    setModal(false)
  }
  // const delFunction = () => {
  //   console.log('')
  // }
  const removeGoaldHandler = (goalid) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalid)
    })
  }
  const cancelAddGoal = () => {
    setModal(false);

  }

  return (
    <View style={styles.screen}>
      <Button title="add Goal" onPress={() => setModal(true)} />
      <GoalInput onAddGoal={addGoal} modalValue={modalview} onCancel={cancelAddGoal} />
      <StatusBar style="auto" />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalsItem title={itemData.item.value} onDelete={removeGoaldHandler} id={itemData.item.id} />} aa />
    </View >
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },



});