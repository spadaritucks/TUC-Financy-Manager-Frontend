import { AuthService } from "@/services/AuthService";
import { AuthRequestDTO } from "@/types/DTOs/Auth/AuthRequestDTO";
import { AuthResponseDTO } from "@/types/DTOs/Auth/AuthResponseDTO";
import { storage } from "@/utils/storage";
import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";

interface AuthContextData {
    user: AuthResponseDTO | null
    login: (data: AuthRequestDTO) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<AuthResponseDTO | null>(null)

    async function login(data : AuthRequestDTO) : Promise<void> {
        try {
            console.log(data)

            const response = await AuthService.Auth({
                email: data.email,
                password: data.password
            })

            storage.set("token", response.token)
            response ? setUser(response) : setUser(null)

            router.replace("/home")

        } catch (error: any) {
            Alert.alert("Erro", error.message)
        }
    }

    function logout() {
        storage.delete("token")
        setUser(null)
        router.replace("/")
    }



    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth () {
    const context = useContext(AuthContext)
    return context
}