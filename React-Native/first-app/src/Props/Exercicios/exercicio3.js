import {Text, View } from "react-native"

export default function Saudacao(prop){
    return(
        <View>
            <Text>Olá, {prop.nome}! Bem-vindo (a)</Text>
        </View>
    );
}

