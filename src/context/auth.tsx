import { AuthService } from "@/services/AuthService";
import { AuthRequestDTO } from "@/types/DTOs/Auth/AuthRequestDTO";
import { AuthResponseDTO } from "@/types/DTOs/Auth/AuthResponseDTO";
import { storage } from "@/utils/storage";
import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";

interface AuthContextData {
    authData: AuthResponseDTO | null
    login: (data: AuthRequestDTO) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {

    const [authData, setAuthData] = useState<AuthResponseDTO | null>(null)

    async function login(data : AuthRequestDTO) : Promise<void> {
        try {

            const response = await AuthService.Auth({
                email: data.email,
                password: data.password
            })

            if(storage.getString("@token")){
                storage.delete("@token")
            }

            storage.set("@token", response.token)
            storage.set("@user", JSON.stringify(response.user))
            response ? setAuthData(response) : setAuthData(null)

            router.replace("/home")

        } catch (error: any) {
            Alert.alert("Erro", error.message)
        }
    }

    function logout() {
        storage.delete("token")
        setAuthData(null)
        router.replace("/")
    }



    return (
        <AuthContext.Provider value={{authData, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth () {
    const context = useContext(AuthContext)
    return context
}