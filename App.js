import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem';

export default function App() {

  const [todo, setTodo] = useState([
    {todo: "Eat", key: 1},
    {todo: "Read", key: 2},
    {todo: "Code", key: 3},
    {todo: "Run", key: 4},
  ])

  const pressHandler = (key) =>{
    setTodo((prevTodo)=>{
      console.log(prevTodo);
      return prevTodo.filter(todo => todo.key != key)
    })
  }

  return (
    <>
       <View style={styles.container}>
        {/* Header */}
        <Header />
        {/* Form */}
        {/* Todos */}
        <View style={styles.todoWrapper}>
          <FlatList 
            data={todo}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
       </View>
    </>
  );
}


// Styles //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd',
    // marginTop: 25
  },
  todoWrapper:{
    padding: 40
  }
});
