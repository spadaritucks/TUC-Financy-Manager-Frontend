import { AuthRequestDTO } from "@/types/DTOs/Auth/AuthRequestDTO";
import { AuthResponseDTO } from "@/types/DTOs/Auth/AuthResponseDTO";
import { API_URL } from "@env";

export class AuthService {

    static async Auth (authRequestDTO : AuthRequestDTO): Promise<AuthResponseDTO> {
        const response = await fetch(`${API_URL}/auth`,{
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST",
            body: JSON.stringify(authRequestDTO)
        })
         

        const data = await response.json()
       

        if(!response.ok){
            throw new Error(data.message)
        }
        
        return data


    }
}