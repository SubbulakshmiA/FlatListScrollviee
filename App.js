
import { StyleSheet, Text, View } from 'react-native';
import MyFlatList from './Components/MyFlatList'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>New text</Text> */}
      <MyFlatList></MyFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
