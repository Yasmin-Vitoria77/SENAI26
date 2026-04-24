import {Text, View, StyleSheet} from "react-native";

// DESESTRUTURAÇÃO
export default function CartaoPerfil({nome, idade}){
    return(
        <View style={styles.card}>
            <Text style={styles.nome}>Nome: {nome}</Text>
            <Text style={styles.info}>Idade: {idade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e6e7eb',
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#6b7288',
    },
})