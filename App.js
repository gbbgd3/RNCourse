import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisable, setModalVisable] = useState(false);

  function startAddGoalHandler(){
    setModalVisable(true);
  }

  function endGoalHandler(){
    setModalVisable(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.id !== id)
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#9e0acc' onPress={startAddGoalHandler}/>
      {modalVisable && <GoalInput visable={modalVisable} onCancel={endGoalHandler} onAddGoal={addGoalHandler} /> }
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            console.log(itemData);
            return (
              <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
              );
            }}
            keyExtractor={(item, index) =>{
              return item.id;
            }}
            alwaysBounceVertical={false}
            />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#10285e'
  },
  goalsContainer: {
    flex: 5,
  }
});
