import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Modal,
  Image
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEntertedGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEntertedGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEntertedGoalText("");
  }

  return (
    <Modal visable={props.visable} animationType="slide">
      <View style={styles.inputContainer}>
          <Image 
            source={require('../assets/favicon.png')}
            style={styles.image}/>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color='#A00acc'/>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
            </View>
          </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 16,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311b6b'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
