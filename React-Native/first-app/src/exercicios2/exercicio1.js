import { View, Text, StyleSheet } from "react-native";

export default function ViewExample03() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 1</Text>

      <View style={styles.exemplo}>
        <View style={{ flexDirection: "column", gap: 8}}>
          <View style={styles.box}>
            <Text>Vermelho</Text>
          </View>
          <View style={styles.box2}>
            <Text>Azul</Text>
          </View>
          <View style={styles.box3}>
            <Text>Verde</Text>
          </View>
        </View>
      </View>

      {/* <View style={styles.exemplo}>
        <View
          style={{
            flexDirection: "column",
            gap: 8,
            height: 350,
            width: 350,
            justifyContent: "center",
            alignItems: "center"
          }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
        </View> */}

       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#ef3232",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: "#4285f4",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: "#6adf55",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
