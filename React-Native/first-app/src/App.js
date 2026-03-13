import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import ViewExample01 from './view_examples/scaffold.js';
// import ViewExample03 from './exercicios2/exercicio2.js';
// import Lista01 from './jsx_examples/exercicios_yasmin/Lista01.js';
import ViewExample03 from './exercicios2/exercicio2.js';
//import ViewExample02 from './view_examples/scaffold01.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewExample03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
  
});
