import { api } from "@/axios";
import { useAuth } from "@/context/auth";
import { TransactionRequestDTO } from "@/types/DTOs/Transactions/TransactionRequestDTO";
import { TransactionResponseDTO } from "@/types/DTOs/Transactions/TransactionResponseDTO";
import { storage } from "@/utils/storage";
import { API_URL } from "@env";

const token = storage.getString("@token");

console.log(token)

export class TransactionService {

    static async getAllTransactions(page: number, size: number): Promise<TransactionResponseDTO[]> {

        const response = await api.get("/transactions", {
            params: {
                page,
                size
            },
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        })

        if (response.status !== 200) {
            throw new Error("Erro no servidor")
        }

        return response.data
    }

    static async getCurrentMonthTransactionsByUserId(userId: string | null, month: number, year: number, page: number, size: number)
        : Promise<TransactionResponseDTO[]> {


        const response = await api.get("/transactions/by-user", {
            params: {
                userId,
                month,
                year,
                page,
                size
            },
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        })

        if (response.status !== 200) {
            throw new Error("Erro no servidor")
        }

        return response.data
    }



    static async createTransaction(transactionRequestDTO: TransactionRequestDTO) {
    
        const response = await api.post("/transactions", transactionRequestDTO, {
            headers : {
                "Authorization" : `Bearer ${token}`
            }
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