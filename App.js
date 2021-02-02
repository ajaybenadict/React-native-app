import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [visibleprops, setVisibleProps] = useState(false);

  const goalHandler = (addTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: addTitle },
    ]);
    setVisibleProps(false);
  };
  const goalcanceler = () => {
    setVisibleProps(false);
  };

  const deleteGoals = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a New Goal" onPress={() => setVisibleProps(true)} />

      <GoalInput
        visible={visibleprops}
        onAdded={goalHandler}
        onCancelled={goalcanceler}
      />
      <FlatList
        //keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={deleteGoals}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
