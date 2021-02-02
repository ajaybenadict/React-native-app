import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const afterEntering = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const goalInputHandler = () => {
    props.onAdded(enteredGoal);
    setEnteredGoal("");
  };
  const goalCancelHandler = () => {
    props.onCancelled();
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.flex}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={afterEntering}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={goalInputHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={goalCancelHandler} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputText: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
