import {Text, View, StyleSheet} from "react-native"

export default function CartaoUsuario({nome, email}){
    return(
        <View style={styles.card}>
            <Text style={styles.letra}>Nome: {nome}</Text>
            <Text>Email: {email}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    card: {
        backgroundColor: '#43f7b5',
        borderRadius: 10,
        padding: 20,
    },
    letra: {
        fontWeight: "bold",
    },
});