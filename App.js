import React, { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listGoals, setListGoals] = useState([]); // Corrected here

  function addGoalHandler(enteredText) {
    setListGoals((currentListGoals) => [  // Corrected here
      ...currentListGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
     <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item) => item.id} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 7,
  },
});
