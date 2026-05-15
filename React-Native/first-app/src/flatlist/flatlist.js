import { FlatList, Text, View, StyleSheet } from "react-native";
import CardItem from "./carditem";

export default function FlatListExemplo() {
  const alunos = [
    { id: "1", nome: "Ana", nota: 9.5 },
    { id: "2", nome: "Bruno", nota: 7.8 },
    { id: "3", nome: "Carla", nota: 6.5 },
    { id: "4", nome: "Joao", nota: 8.0 },
    { id: "5", nome: "Miguel", nota: 7.2 },
    { id: "6", nome: "Fernando", nota: 5.9 },
    { id: "7", nome: "Leticia", nota: 8.8 },
    { id: "8", nome: "Pedro", nota: 6.0 },
    { id: "9", nome: "Julia", nota: 9.0 },
    { id: "10", nome: "Lucas", nota: 7.5 },
    { id: "11", nome: "Maria", nota: 8.3 },
    { id: "12", nome: "Rafael", nota: 6.7 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FlatList</Text>
      <View style={styles.exemploLista}>
        <Text style={styles.subtitulo}>FlatList</Text>
        <FlatList
          data={alunos}
          keyExtractor={(item) => item.id}
          renderItem={({ item: alunos }) => (
            <CardItem nome={alunos.nome} nota={alunos.nota} />
          )}
          ListEmptyComponent={<Text>A lista está vazia</Text>}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
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

  exemploLista: {
    width: "80%",
    // height: 250,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 4,
    borderRadius: 4,
  },
});
