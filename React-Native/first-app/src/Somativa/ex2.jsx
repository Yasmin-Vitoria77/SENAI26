import { StyleSheet, Text, View } from "react-native";

export default function ExercicioSomativa2() {
  return <View style={styles.container}>
    <View
        style={{
            flex: 1, flexDirection: "column"
          }}>
        <View style={styles.banner}>
          <Text style={styles.textStyle}>Promoção</Text>
        </View>


        <View style={styles.cardA}>
          <Text style={styles.textStyle}>Card A</Text>
        </View>
        <View style={styles.cardB}>
            <Text style={styles.textStyle}>Card B</Text>
        </View>
        <View style={styles.cardC}>
            <Text style={styles.textStyle}>Card C</Text>
        </View>


        <View style={styles.destaque}>
            <Text style={styles.textStyle}>Destaque</Text>
        </View>


        <View style={styles.cat1}>
            <Text style={styles.textStyle}>Cat 1</Text>
        </View>
        <View style={styles.cat2}>
            <Text style={styles.textStyle}>Cat 2</Text>
        </View>
        <View style={styles.cat3}>
            <Text style={styles.textStyle}>Cat 3</Text>
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
  banner: {
    height: 80,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  linhaCards: {
    height: 150,
    gap: 8,
  },
  destaque: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  footer: {
    height: 100,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    gap: 8,
  },
  cardA: {
    fles: 2,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center",    
  },
  cardB: {
    flex: 1,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  cardC: {
    flex: 2,
    backgroundColor: "#f39c12",
    justifyContent: "center",
    alignItems: "center",
  },
  cat1: {
    flex: 1,
    backgroundColor: "#9b59b6",
  },
  cat2: {
    flex: 1,
    backgroundColor: "#1abc9c",
  },
  cat3: {
    flex: 1,
    backgroundColor: "#e67e22",
  },
});