import { TransactionStatus } from "../Enums/TransactionStatus"
import { TransactionTypeEnum } from "../Enums/TransactionTypeEnum"

export type TransactionRequestDTO = {
    userId: string
    subCategoryId: string
    transactionType: TransactionTypeEnum
    transactionValue : number
    description: string
    transactionStatus : TransactionStatus
}