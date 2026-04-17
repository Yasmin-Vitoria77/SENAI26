import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

export default function PerfilAluno (prop){
    return(
        <View>
            <TouchableOpacity  style={styles.botao}>
                <Text>{prop.titulo}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    botao: {
        alignItems: 'center',
        backgroundColor: '#c2d4c2',
        padding: 5,
        borderRadius: 10
  },
});