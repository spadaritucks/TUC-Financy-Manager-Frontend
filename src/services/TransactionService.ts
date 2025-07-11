import { useAuth } from "@/context/auth";
import { TransactionRequestDTO } from "@/types/DTOs/Transactions/TransactionRequestDTO";
import { TransactionResponseDTO } from "@/types/DTOs/Transactions/TransactionResponseDTO";
import { storage } from "@/utils/storage";
import { API_URL } from "@env";

const token = storage.getString("@token");

export class TransactionService {

    static async getAllTransactions(page: string, size: string): Promise<TransactionResponseDTO[]> {
        const response = await fetch(`${API_URL}/transactions?page=${page}&size=${size}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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
                "Authorization": `Bearer ${token}`
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