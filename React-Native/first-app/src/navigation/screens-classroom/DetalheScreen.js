// ============================================
// TELA: DetalheScreen
// ============================================

import { StyleSheet, Text, View, Button } from "react-native";

export default function DetalheScreen({navigation, route}) {
  const {titulo, descricao} = route.params ?? {}//desestruturação
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo ?? "Pedido vazio"}</Text> 
      <Text style={styles.titulo}>{descricao ?? "Tente novamente"}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
