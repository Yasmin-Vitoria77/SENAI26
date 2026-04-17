import {View, Text, StyleSheet} from "react-native"

export default function (props){
    return(
        <View>
            <Text>Produto: {props.produto}</Text>
            <Text>Preco: R${props.preco}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#d26666',
        padding: 20,
        borderColor: '#8f1919',
        borderWidth: 2,
    },
    letra: {
        fontWeight: "bold",
    },
    preco: {
        fontSize: 14,
    },
});