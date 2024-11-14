import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredtext] = useState('');
  const[listGoals, setListGolas]=useState([]);
  function goalInputHandler(enteredText){
    setEnteredtext(enteredText);
  }
  function addGoalHandler(){

setListGolas((currentListGoals)=> [...currentListGoals, enteredText]);
setEnteredtext('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your Current goal" onChangeText={goalInputHandler}></TextInput>
      <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>{listGoals.map((goal)=> <View style={styles.goalItem} key={goal}><Text style={styles.textColor}>{goal}</Text></View>)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
paddingTop:100,
paddingHorizontal:16,
  },
inputContainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:"center",
  paddingBottom:50,
  borderBottomWidth:2,
  borderBottomColor:"#cccccc"

},

textInput: {
borderWidth:1,
borderColor:'#cccccc',
width: '80%',
padding:8,
marginRight:8

  },
  goalsContainer: {
    flex:7,

  },
  goalItem: {
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
  },
  textColor:
  {
    color:"white",

  }

});
