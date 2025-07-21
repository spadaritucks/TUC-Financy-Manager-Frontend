import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/default-colors";
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { GoalResponseDTO } from "@/types/DTOs/Goals/GoalResponseDTO";
import { useMemo } from "react";
import { GoalStatus } from "@/types/DTOs/Enums/GoalStatus";


interface GoalTotalProps {
   goals : GoalResponseDTO[] | undefined
}





export default function GoalTotal({goals} : GoalTotalProps) {

    const inProgressGoals = useMemo(() => {
        const inProgressGoalsFiltered = goals ? goals.filter(goal => goal.goalStatus === GoalStatus.InProgress) : []
        const inProgressGoalsCount = inProgressGoalsFiltered ? inProgressGoalsFiltered.length : 0

        return inProgressGoalsCount
    },[goals])

    const expiredGoals = useMemo(() => {
        const expiredGoalsFiltered = goals ? goals.filter(goal => goal.goalStatus === GoalStatus.Expired) : []
        const expiredGoalsCount = expiredGoalsFiltered ? expiredGoalsFiltered.length : 0

        return expiredGoalsCount
    },[goals])

    const completedGoals = useMemo(() => {
        const completedGoalsFiltered = goals ? goals.filter(goal => goal.goalStatus === GoalStatus.Completed) : []
        const completedGoalsCount = completedGoalsFiltered ?completedGoalsFiltered.length : 0

        return completedGoalsCount
    },[goals])

    return (         
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.titleHeader}>Numeros de Metas</Text>
            </View>
            <View style = {styles.content}>
                <View style = {styles.data}>
                    <Text style = {styles.counter}>{inProgressGoals}</Text>
                    <View style = {styles.titles}>
                        <Text style = {styles.title}>Em andamento</Text>
                        <MaterialIcons name="pending" size={18} color={colors.blue[400]} />
                    </View>
                </View>
                <View style = {styles.data}>
                    <Text style = {styles.counter}>{completedGoals}</Text>
                    <View style = {styles.titles}>
                        <Text style = {styles.title}>Concluido</Text>
                        <MaterialIcons name="check-circle" size={18} color={colors.green[700]} />
                    </View>
                </View>
                <View style = {styles.data}>
                    <Text style = {styles.counter}>{expiredGoals}</Text>
                    <View style = {styles.titles}>
                        <Text style = {styles.title}>Expirado</Text>
                        <MaterialIcons name="timer-off" size={18} color={colors.red[400]} />
                    </View>
                </View>
            </View>
        </View>
    )
}