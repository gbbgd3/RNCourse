import { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props){
const [enteredGoalText, setEntertedGoalText] = useState("");

function goalInputHandler(enteredText) {
    setEntertedGoalText(enteredText);
}

function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEntertedGoalText('');
}
    return (
        <>
            <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },
})