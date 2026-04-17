import {View, Text, StyleSheet} from "react-native"

export default function PerfilAluno (prop){
    return(
        <View style={styles.card}>
            <Text>Nome: {prop.nome}</Text>
            <Text>Turma: {prop.turma}</Text>
            <Text>Matrícula: {prop.id}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: "#c9f1ff",
        borderRadius: 10,
    },
});