import { GoalStatus } from "../Enums/GoalStatus"

export type GoalRequestDTO = {
    userId: string
    subcategoryId: string
    goalName : string
    targetValue : string
    start_date : Date
    end_date: Date
    goalStatus : GoalStatus
}