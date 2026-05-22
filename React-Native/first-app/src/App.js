import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native"

// import  CartaoPerfil  from "./Props/cartao_perfil";
// import CardProduto from "./Props/Exercicios/exercicio1"
// import CartaoUsuario from "./Props/Exercicios/exercicio2";
// import Saudacao from "./Props/Exercicios/exercicio3";
// import PerfilAluno from "./Props/Exercicios/exercicio4";
// import Botao from "./Props/Exercicios/desafio";
// import ContadorExample from "./hooks/useState_example";
//import TelaMoeda from "./Hooks/useEffect_example";
//import FormularioExemplo from "./text_input/formulario";
//import StackNavigator from "./navigation/stack_navigation";
import BottomTabNavigator from "./navigation/bottom_tab_navigation";
// import TelaLogin from "./Hooks/useRef_example";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    //justifyContent: "center",
    //alignItems: "center", //deixo pequenininho
  },
});
