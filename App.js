import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import TasksScreen from './src/screens/Tasks';


// You can import from local files
// import AssetExample from './src/components/AssetExample';

// or any pure javascript modules available in npm

export default function App() {

  return (

      <SafeAreaView style={{flex: 1}}>
        <TasksScreen />
      </SafeAreaView>


  );
}

