import { useEffect } from "react";
import { useAuth } from "@/context/auth";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerRoutesList } from "@/routes/drawer.routes";

export function useMiddleware() {
  const { authData } = useAuth();

  const drawer = useNavigation<DrawerNavigationProp<DrawerRoutesList>>()
  


  useEffect(() => {
    const token = authData ? authData.token : null
    token === null ?  drawer.reset({index : 0, routes : [{name : "stack", params : {screen : "login"}}]}) :  
    null
  }, []); 
}