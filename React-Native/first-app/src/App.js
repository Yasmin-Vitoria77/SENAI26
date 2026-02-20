import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo03 from './jsx_examples/03_condicionais_jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bd081',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
  
});
