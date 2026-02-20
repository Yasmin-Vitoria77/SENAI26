import { StyleSheet, Text, View } from "react-native";

export function ExpressoesJSX(){
    const nome = "Mariana";
    const idade = 20;
    const preco = 49.9;

    const usuario = {
        nome: "Pedro",
        cidade: "São Paulo",
    };

    return(
     <View style={styles.container}>
        <Text style={styles.titulo}>Expressões JSX - Exemplos</Text>
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
        </View>

        <View>
            <Text>Maiusculas: {nome.toUpperCase()}</Text>
            <Text>Soma: {preco * 2}</Text>
        </View>

        <View>
            <Text>{usuario.nome}</Text>
            <Text>{usuario.cidade}</Text>
        </View>
     </View>
    )
}  

   
const styles = StyleSheet.create({
    // Aqui é tipo CSS, mas vai ser camelCase (minusculo depois maiusculo a próxima palavra)
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    titulo: {
        fontSize:20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exemplo: {
        width: "80%",
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    }
});