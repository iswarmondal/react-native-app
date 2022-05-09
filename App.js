import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


export default function App() {

  const pressHandler = () =>{
    setPreson({name : 'Violet', age: 20})
  }

  const [person, setPreson] = useState({name: 'Iswar', age: 19});
  const [username, setUsername] = useState("Jhon Snow")
  const [userage, setUserage] = useState('99')
  const [tasks, setTasks] = useState(['Read', 'Drink water', 'code', 'play the guitar', 'eat'])
  const [tasks2, setTasks2] = useState([
    {task: 'Read', id: '1'},
    {task: 'Drink water', id: '2'},
    {task: 'code', id: '3'},
    {task: 'play the guiter', id: '4'},
    {task: 'eat', id: '5'},
  ])

  return (
    <>
        {/* FlatList to render a list */}
        <FlatList
          numColumns={1}
          keyExtractor={(item)=> item.id}
          data={tasks2}
          renderItem={({item}) => (<>
          <Text style={styles.tasks}>task : {item.task}</Text>
          <Text style={styles.tasks}>task : {item.task}</Text>
          <Text style={styles.tasks}>task : {item.task}</Text>
          </>
          )}
        />
    </>
  );
}


// Styles //
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navbar:{
    backgroundColor: 'pink',
    padding: 40
  },
  body:{
    backgroundColor: 'yellow',
    padding: 50
  },
  btnContainer:{
    padding: 30
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 7,
    width: 200,
    padding: 7,
    marginVertical: 2
  },
  tasks:{
    paddingVertical: 50,
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    fontSize: 30,
  }
});
