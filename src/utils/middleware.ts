import { useEffect } from "react";
import { router } from "expo-router";
import { useAuth } from "@/context/auth";

export function useMiddleware() {
  const { user } = useAuth();

  useEffect(() => {
    // Só verifica se já temos certeza que o AuthContext foi carregado
    if (user === null) {
      router.replace("/");
    }
  }, [user]); // Dependência reativa
}