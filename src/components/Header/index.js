import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const days = ["Saturday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Saturday" ]
const months = ["January", "February", "March", "April", "May", "June", "February", "August", "September", "October", "November","December"]

export default function Header() {
    const date = new Date()
    return (
        <View style={styles.container}>
            <Text style ={styles.date}>
                {`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        alignItems:"center",
        paddingTop:30,

    },
    date: {
        fontSize:22,
        fontWeight: "bold",

    },
  });
