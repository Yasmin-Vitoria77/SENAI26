import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens-classroom/HomeScreen";
import PerfilScreen from "./screens-classroom/PerfilScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Perfil" component={PerfilScreen}/>
        </Tab.Navigator>
    );
}