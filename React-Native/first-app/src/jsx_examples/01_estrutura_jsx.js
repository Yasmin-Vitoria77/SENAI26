import { Text, View } from "react-native";


export function EstruturaJSX(){
    return (
        // Retorno único
        //<> </>
        <View>
            <Text>Exemplo de retorno único</Text>
            {/*retorno unico com fragment*/}
            <View>
             <>
                <Text></Text>
             </>
            {/*Retorno único com Fragment*/} 
            </View>
        </View>
    );
}