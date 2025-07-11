import { useAuth } from "@/context/auth";
import { UserRequestDTO } from "@/types/DTOs/Users/UserRequestDTO";
import { UserResponseDTO } from "@/types/DTOs/Users/UserResponseDTO";
import { storage } from "@/utils/storage";
import { API_URL } from "@env";


const token = storage.getString("token");

export class UserService {

    static async getAllUsers(page: string, size: string): Promise<UserResponseDTO[]> {
        const response = await fetch(`${API_URL}/users?page=${page}&size=${size}`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data
    }

    static async createUser(UserRequestDTO: UserRequestDTO): Promise<void> {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserRequestDTO)
        })


        const data = await response.json()

        if (!response.ok) {
            if (Array.isArray(data) && data[0]?.message) {
                throw new Error(data.map((e: any) => e.message).join("\n"));
            }
            throw new Error(data.message)
        }
        return data

    }
}