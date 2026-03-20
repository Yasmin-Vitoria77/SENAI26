import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return <View style={styles.container}>
    <View
        style={{
            flex: 1, flexDirection: "column"
          }}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Header</Text>
        </View>
        <View style={styles.mainContent}>
            <Text style={styles.textStyle}>Main Content</Text>
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
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 80,
    backgroundColor: "green",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  footer: {
    height: 80,
    backgroundColor: "blue",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  yellowBox: {
    height: 120,
    width: 120,
    backgroundColor: "#ffda03",
    alignItems: "center",
    justifyContent: "center",    
  },
});