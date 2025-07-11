import { useAuth } from "@/context/auth";
import { GoalResponseDTO } from "@/types/DTOs/Goals/GoalResponseDTO";
import { GoalRequestDTO } from "@/types/DTOs/Goals/GoalRequestDTO";
import { API_URL } from "@env";
import { storage } from "@/utils/storage";

const token = storage.getString("token");

export class GoalService {

    static async getAllGoals(page: string, size: string): Promise<GoalResponseDTO[]> {
        const response = await fetch(`${API_URL}/goals?page=${page}&size=${size}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await response.json()

        return data
    }



    static async createGoal(goalRequestDTO: GoalRequestDTO) {
        const response = await fetch(`${API_URL}/goals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(goalRequestDTO)
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