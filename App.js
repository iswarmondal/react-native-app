import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>This is the navbar</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>
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
  }
});
