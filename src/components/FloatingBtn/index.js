import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export default function Bouton({ toggle, isOpen}) {
  return (
    <Pressable onPress={toggle} style={styles.btn}>
      <Text style={styles.txt}>{isOpen ? "-" : "+"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right:20,
    bottom:30,
    borderRadius:10,
    height:40,
    width:40,
    backgroundColor: "blue",
    justifyContent:"center"
  },
  txt:{

    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    color:"white",
    paddingBottom:5
  }
});
