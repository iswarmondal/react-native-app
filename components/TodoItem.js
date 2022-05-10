import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
      <Text style={styles.TodoItem}>
          {item.todo}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    TodoItem:{
        marginVertical: 10,
        borderColor: "#bababa",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        backgroundColor: "#8650ff38",
        color: '#F57',
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bolder'
    }
})