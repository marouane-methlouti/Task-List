import React, {useState} from 'react'
import { TextInput, StyleSheet,View } from 'react-native'
import { Button } from 'react-native'

export default function TaskForm({onAddTask}) {
const [newTitle, setNewTitle] = useState("")
const onChangeText =(val) =>{
    setNewTitle(val)
}
const onAddNewTask = () =>{
    if (newTitle === "") return

    onAddTask(newTitle)
    setNewTitle("")
}

    return (
        <View style= {styles.container}>
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={newTitle}
            placeholder='New task'
            />
            <Button
            title="Add"
            onPress={onAddNewTask}
            color="blue"
             />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:30
    },
    input:{
        borderColor:"black",
       borderWidth:1,
        borderRadius:5,
        width:"80%",
        height:34,
        padding:10
    },
})
