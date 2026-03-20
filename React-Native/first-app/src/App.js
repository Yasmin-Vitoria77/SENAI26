import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import ViewExample01 from './view_examples/scaffold.js';
// import ViewExample03 from './exercicios2/exercicio2.js';
// import ExercicioView01 from './exercicios2/exemplo.js';
// import ExercicioView02 from './exercicios2/exemplo01.js';
// import ViewExample02 from './view_examples/scaffold01.js';
// import ViewExample03 from './exercicios2/exercicio2.js';
// import ExercicioView01 from './exercicios2/exemplo.js';
// import ExercicioView02 from './exercicios2/exemplo01.js';
// import ExercicioView03 from './exercicios2/exercicio03.js';
// import ExercicioView04 from './exercicios2/exercicio04.js';
// import ExercicioView05 from './exercicios2/exercicio05.js';
// import ExercicioView06 from './exercicios2/exercicio06.js';
import ExercicioView07 from './FlexBoxeView_YasminVitoria/exercicio07.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView07/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    justifyContent: 'center',
  }
 
  
});
