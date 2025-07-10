import { TransactionStatus } from "../Enums/TransactionStatus"
import { TransactionTypeEnum } from "../Enums/TransactionTypeEnum"

export type TransactionRequestDTO = {
    userId: string
    subcategoryId: string
    transactionType: TransactionTypeEnum
    transactionValue : number
    description: string
    transactionStatus : TransactionStatus
}