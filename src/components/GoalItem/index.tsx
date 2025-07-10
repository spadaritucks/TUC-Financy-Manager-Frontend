import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TransactionTypeEnum } from "@/types/DTOs/Enums/TransactionTypeEnum";
import { GoalStatus } from "@/types/DTOs/Enums/GoalStatus";

interface GoalItemProps {
    targetValue: number,
    goalStatus: string,
    goalName: string
    endDate: string
}




export default function GoalItem({ endDate, goalName, goalStatus, targetValue }: GoalItemProps) {


    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.description}>{goalName}</Text>
                <Text style={styles.targetValue}>{targetValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                })}</Text> :

            </View>
            <View style={styles.content}>
                {goalStatus === GoalStatus.InProgress ? <Text style={styles.goalStatusInProgress}>Em Progresso</Text> :
                    goalStatus === GoalStatus.Completed ? <Text style={styles.goalStatusExpired}>Expirado</Text> :
                        <Text style ={styles.goalStatusCompleted}>Expirado</Text>}
                <Text style={styles.endDate}>{new Date(endDate).toLocaleDateString("pt-BR")}</Text>
            </View>
        </TouchableOpacity>
    )
}