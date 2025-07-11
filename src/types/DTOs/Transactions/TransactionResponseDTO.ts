import { TransactionStatus } from "../Enums/TransactionStatus"
import { TransactionTypeEnum } from "../Enums/TransactionTypeEnum"

export type TransactionResponseDTO = {
    id: string
    userId: string
    subcategoryId: string
    transactionType: TransactionTypeEnum
    transactionValue : number
    description: string
    transactionStatus : TransactionStatus
    createdAt: string
    updatedAt:string
}