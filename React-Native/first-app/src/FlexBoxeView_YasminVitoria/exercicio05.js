import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return <View style={styles.container}>
    <View
        style={{
            flexDirection: "row",
            flex: 1,
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
        <View style={styles.redBox}>
          <Text style={styles.textStyle}>R</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>G</Text>
        </View>
      </View>
    </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 'row',
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: '100%',
    width: '100%',
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  greenBox: {
    height: '100%',
    width: '100%',
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});