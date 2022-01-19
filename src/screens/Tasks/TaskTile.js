import React from "react";
import { Pressable, Text, Image, StyleSheet, View } from "react-native";

export default function TaskTile({ task, onUpDateTask, onDeleteTask }) {
  const onChangeStatus = () => {
    onUpDateTask(task.id);
  };
  const _onDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus} style={styles.subContainer}>
        <Image
          style={styles.check}
          source={
            task.isCompleted
              ? require("../../../assets/icons/check.png")
              : require("../../../assets/icons/circle.png")
          }
        />
      </Pressable>

      <Text style={styles.title}>{task.title}</Text>
      <Pressable onPress={_onDeleteTask}>
        <Image
          style={styles.check}
          source={require("../../../assets/icons/delete.png")}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
  },
  check: {
    width: 26,
    height: 26,
  },
});
