import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

function GoalInput(props) {
    const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function onAddGoalHandler(){
    props.onAddGoal(enteredText);
    setEnteredText('');
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Current goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button title="Add Goal" onPress={onAddGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 50,
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc",
      },
    
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        padding: 8,
        marginRight: 8,
      },
})
