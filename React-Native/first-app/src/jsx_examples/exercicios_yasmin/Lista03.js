import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista03() {
const frutas = ["Maça", "Banana", "Laranja", "Uva"];
const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.9},
    { id: 2, nome: "Calça", preco: 89.90},
    { id: 3, nome: "Tênis", preco: 199.90}
];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 03 - Yasmin Vitória</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Lista de Frutas</Text>
        {frutas.map((fruta, indice) => (
            <Text key={indice}>
                {indice + 1} - {fruta}
            </Text>
         ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Lista de Produtos</Text>
            {produtos.map((produtos) => (
                <Text key={produtos.id}>
                    {produtos.nome} - {produtos.preco.toFixed(2)}
                </Text>
            ))}
      </View>

    
        <View style={styles.card}>
             <Text style={styles.label}>Exercício 1 - View com Text</Text>
             {numeros
                .filter ((numeros) => numeros % 2 == 0)
                .map((numero, indice) => (
                    <Text key={indice}>{numero}</Text>
                ))}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});