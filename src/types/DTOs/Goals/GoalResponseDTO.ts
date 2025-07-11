import { GoalStatus } from "../Enums/GoalStatus"

export type GoalResponseDTO = {
    id: string
    userId: string
    subcategoryId: string
    goalName : string
    targetValue : string
    start_date : Date
    end_date: Date
    goalStatus : GoalStatus
    createdAt: string
    updatedAt:string
}