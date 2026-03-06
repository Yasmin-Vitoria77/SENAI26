import {View, Text, StyleSheet} from "react-native";

export default function Exemplo03() {
    const logado = false;
    const temNotificacoes = true;

    return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 3 - Condicionais</Text>
            <Text style={styles.subtitulo}>Ternário</Text>
            <Text>Status: {logado ? "Logado" : "Deslogado"}</Text>
            {/*? = se / : = se não */}
    </View>

    <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Operador &&</Text>
        <Text>Notificações:</Text>
        {temNotificacoes && <Text>Voce tem notificacoes</Text>}
        {!temNotificacoes && <Text>Nenhuma notificacao</Text>}
        {/*&& = então */}
        {/*! = inverte o valor da variável */}
    </View>
    </View>
);
}