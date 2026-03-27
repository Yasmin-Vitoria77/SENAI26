import { StyleSheet, Text, View } from "react-native";

export default function ExercicioSomativa2() {
  return <View style={styles.container}>
    <View
        style={{
            flex: 1, flexDirection: "row"
          }}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Header</Text>
        </View>

        <View style={styles.sidebar}>
          <Text style={styles.textStyle}>Sidebar</Text>
        </View>

      
        <View style={styles.areaPrincipal}>
          <View style={styles.cardA}>
            <Text style={styles.textStyle}>Card A</Text>
          </View>
          <View style={styles.cardB}>
            <Text style={styles.textStyle}>Card B</Text>
          </View>
          <View style={styles.cardC}>
            <Text style={styles.textStyle}>Card C</Text>
          </View>
          
        <View style={styles.divisor}></View>

        <View style={styles.c}>
          <Text style={styles.textStyle}>C</Text>
        </View>
        <View style={styles.cardD}>
          <Text style={styles.textStyle}>Card D</Text>
        </View>
        <View style={styles.e}>
          <Text style={styles.textStyle}>E</Text>
        </View>
        </View>



  

        <View style={styles.footer}>
          <Text style={styles.textStyle}>Footer</Text>
        </View>
        </View>
    </View>
  
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  linhaCards: {
    height: 150,
    gap: 8,
  },
  footer: {
    height: 50,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    gap: 8,
  },
  sidebar: {
    flex: 1,
    width: 80,
    backgroundColor: "#34495e",
    flexDirection: "column"
  },
  areaPrincipal: {
    flexDirection: "column",
  },
  cardA: {
    flex: 1,
    backgroundColor: "#16964b",
    alignItems: "center",
    justifyContent: "center",    
  },
  cardB: {
    flex: 1,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  divisor: {
    flex: 1,
    backgroundColor: "#34495e",
    height: 8,
  },
  c: {
    flex: 1,
    backgroundColor: "#cf2b19",
  },
  cardD: {
    flex: 1,
    backgroundColor: "#f39c12",
  },
  e: {
    flex: 1,
    backgroundColor: "purple",
  },
});