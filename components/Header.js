import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        backgroundColor: 'coral',
        paddingVertical: 20,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    headerText:{
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold' 
    }
})