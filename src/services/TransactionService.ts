import { useAuth } from "@/context/auth";
import { TransactionRequestDTO } from "@/types/DTOs/Transactions/TransactionRequestDTO";
import { TransactionResponseDTO } from "@/types/DTOs/Transactions/TransactionResponseDTO";
import { API_URL } from "@env";

const { authData } = useAuth()

export class TransactionService {

    static async getAllTransactions(page: string, size: string): Promise<TransactionResponseDTO[]> {
        const response = await fetch(`${API_URL}/transactions?page=${page}&size=${size}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authData && authData.token}`
            }
        })

        const data = await response.json()

        return data
    }



    static async createTransaction(transactionRequestDTO: TransactionRequestDTO) {
        const response = await fetch(`${API_URL}/transactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authData && authData.token}`
            },
            body: JSON.stringify(transactionRequestDTO)
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