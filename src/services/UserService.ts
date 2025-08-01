import { api } from "@/axios";
import { useAuth } from "@/context/auth";
import { UserRequestDTO } from "@/types/DTOs/Users/UserRequestDTO";
import { UserResponseDTO } from "@/types/DTOs/Users/UserResponseDTO";
import { storage } from "@/utils/storage";
import { API_URL } from "@env";


const token = storage.getString("token");

export class UserService {

    static async getAllUsers(page: string, size: string): Promise<UserResponseDTO[]> {
        const response = await api.get("/users", {
            params: {
                page,
                size
            },
            headers : {
                "Authorization" : `Bearer ${token}`
            },
        })

        if (response.status !== 200) {
            throw new Error("Erro no servidor")
        }

        return response.data
    }

    static async createUser(UserRequestDTO: UserRequestDTO): Promise<void> {
        const response = await api.post("/users", UserRequestDTO,{
            headers : {
                "Authorization" : `Bearer ${token}`
            },
            
        })

        if (response.status !== 201) {
            if (Array.isArray(response.data) && response.data[0]?.message) {
                throw new Error(response.data.map((e: any) => e.message).join("\n"));
            }
            throw new Error(response.data.message)
        }
        return response.data

    }
}