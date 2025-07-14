import { useEffect } from "react";
import { router, usePathname } from "expo-router";
import { useAuth } from "@/context/auth";

export function useMiddleware() {
  const { authData } = useAuth();

  const pathname = usePathname()

  useEffect(() => {
    const token = authData ? authData.token : null
    token === null ?  router.replace("/") :  
    pathname === "/login" || pathname === "/register" ? router.replace("/home") : null
  }, []); 
}