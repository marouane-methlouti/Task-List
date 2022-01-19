import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import TaskForm from "./TaskForm";
import TaskTile from "./TaskTile";
import Bouton from "../../components/FloatingBtn";
import Count from "../../components/Counter";

export default function TasksScreen() {
  //Liste de taches
  // state pour gardder en mémoire les taches
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // item = {title : "hello marouane", isCompleted: false}
  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        onUpDateTask={onUpDateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  // ajouter une fonction pour ajouter une tache au state
  // passer cette fonction au forme
  const onAddTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
    ]);
  };

  const onDeleteTask = (id) => {
    let newTasks = [];
    tasks.forEach((t) => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }
    });
    setTasks(newTasks);
  };

  const onUpDateTask = (id) => {
    let newTasks = [];
    tasks.forEach((t) => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }
      newTasks.push({
        id,
        title: t.title,
        isCompleted: !t.isCompleted,
      });
    });

    setTasks(newTasks);
  };

  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  // 2x TasksCounter => props nb & title
  //Taskslist => return FlatList => taskTitle

  //Ajouter un bouton flottant => style absolute
  // callback => rendu conditionnel TaskForm
  return (
    <>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.containerCount}>
              <Count nb={tasks.length} title="Tasks" />
              <Count
                nb={tasks.filter((t) => t.isCompleted === true).length}
                title="Accomplished tasks"
              />
            </View>
          </>
        }
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Bouton toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  containerCount:{
    flexDirection:"row",
    justifyContent:"space-between",
    textAlign :"center",
    marginTop:20,
    paddingHorizontal:20
  }

})
