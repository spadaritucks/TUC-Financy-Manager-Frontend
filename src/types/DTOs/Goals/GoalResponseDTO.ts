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
    created_at: string
    updated_at: string
}