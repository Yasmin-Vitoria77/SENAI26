
import { StyleSheet, Text, View } from "react-native";
// import  CartaoPerfil  from "./Props/cartao_perfil";
// import CardProduto from "./Props/Exercicios/exercicio1"
// import CartaoUsuario from "./Props/Exercicios/exercicio2";
// import Saudacao from "./Props/Exercicios/exercicio3";
// import PerfilAluno from "./Props/Exercicios/exercicio4";
// import Botao from "./Props/Exercicios/desafio";
// import ContadorExample from "./hooks/useState_example";
import TelaMoeda from "./Hooks/useEffect_example";
// import TelaLogin from "./Hooks/useRef_example";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CartaoPerfil nome="Daniel" idade={22} />
      <CartaoPerfil nome="Marlon" idade={25} />
      <CartaoPerfil nome="Celso" idade={37} /> */}

      {/* <CardProduto produto="Abóbora" preco={15.00}/> */}

      {/* <CartaoUsuario nome="Yasmin" email="minauthentica@gmail.com"/> */}

      {/* <Saudacao nome="Gabi"/>
      <Saudacao nome="Henrique"/>
      <Saudacao nome="Pamela"/> */}

      {/* <PerfilAluno nome="Carlos" turma="DS-2025" id="00123"/> */}
      {/* <Botao titulo="Entrar"/>
      <Botao titulo="Sair"/>
      <Botao titulo="Cadastrar"/> */}
      <TelaMoeda/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center", //deixo pequenininho
  },
});
