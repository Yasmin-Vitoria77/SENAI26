import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return <View style={styles.container}>
    <View
        style={{
            flexDirection: 'row',
            gap: 8,
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <View style={styles.greenBox}><Text style={styles.textStyle}>Verde</Text></View>
        <View style={styles.redBox}><Text style={styles.textStyle}>Vermelho</Text></View>
    </View>

    <View
        style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
    >
        <View style={styles.blueBox}><Text style={styles.textStyle}>Azul</Text></View>
        <View style={styles.yellowBox}><Text style={styles.textStyle}>Amarelo</Text></View>
    </View>
    </View>
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    flex:1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
   flex:1,    
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
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: "#ffda03",
    alignItems: "center",
    justifyContent: "center",    
  }
});