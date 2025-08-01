import { api } from "@/axios";
import { AuthRequestDTO } from "@/types/DTOs/Auth/AuthRequestDTO";
import { AuthResponseDTO } from "@/types/DTOs/Auth/AuthResponseDTO";
import { API_URL } from "@env";


export class AuthService {

    static async Auth (authRequestDTO : AuthRequestDTO): Promise<AuthResponseDTO> {
       

        const response = await api.post("/auth", authRequestDTO)
      
        if(response.status !== 200){
            throw new Error(response.data.message)
        }
        return response.data
        
    }
}