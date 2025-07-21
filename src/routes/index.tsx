import { NavigationContainer } from "@react-navigation/native";
import DrawerLayout from "./drawer.routes";

export default function Routes () {

    return (
        <NavigationContainer>
            <DrawerLayout/>  
        </NavigationContainer>
    )
}