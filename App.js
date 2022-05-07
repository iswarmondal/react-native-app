import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


export default function App() {

  const pressHandler = () =>{
    setPreson({name : 'Violet', age: 20})
  }

  const [person, setPreson] = useState({name: 'Iswar', age: 19});
  const [username, setUsername] = useState("Jhon Snow")
  const [userage, setUserage] = useState('99')
  const [tasks, setTasks] = useState(['Read', 'Drink water', 'code', 'play the guitar', 'eat'])

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.navbar}>
        <Text>This is the navbar</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello everyone 👋</Text>
        <Text>I'm {person.name}, a {person.age} years old developer</Text>
        <View style={styles.btnContainer}>
          <Button title="The other self ?" onPress={pressHandler}/>
        </View>
        <Text>Your name is {username}, aged {userage} ?</Text>
        <TextInput 
        style={styles.textInput}
        placeholder="e.g. Jhon Snow"
        keyboardType='default'
        onChangeText={(val)=>setUsername(val)}
        />

        <TextInput 
        style={styles.textInput}
        placeholder="e.g. 99"
        keyboardType='numeric' 
        onChangeText={val=>setUserage(val)}
        />

        <Text>These are my daily todo list</Text>
        <View>
          {
            tasks.map((item, index)=>(
              <Text style={styles.tasks} key={index}>{item}</Text>
            ))
          }
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

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
