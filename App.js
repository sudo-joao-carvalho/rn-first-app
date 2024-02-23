import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    //setGoals((previousState) => [...previousState, enteredGoal]); -> for a normal array

    //FlatList expects an array of objects because they need to have a key
    setGoals((previousState) => [...previousState, {key: Math.random().toString(), value: enteredGoal}]);

    /* setGoals((previousState) => [...previousState, {id: Math.random().toString(), value: enteredGoal}]);
        but in the FlatList component I would have to add another property
        keyExtractor={(item, index) => item.id}
    */
   setIsModalVisible(false);
  }

  const handleRemoveGoal = (goalToRemoveKey) => {
    setGoals((previousState) => {
      return previousState.filter((goal) => goal.key !== goalToRemoveKey);
    });
  }

  const handleIsModalVisible = () => setIsModalVisible(!isModalVisible);

  return (
    <View style={styles.screen}>
      <Button 
        title={"Add new Goal"}
        onPress={handleIsModalVisible}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        isModalVisible={isModalVisible}
        onCancel={handleIsModalVisible}
      />
      <FlatList 
        data={goals}
        renderItem={itemData => 
          <GoalItem
            goal={itemData.item}
            handleRemoveGoal={handleRemoveGoal}
          />
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
