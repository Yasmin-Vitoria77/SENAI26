import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}></View>;
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});