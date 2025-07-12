import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TransactionTypeEnum } from "@/types/DTOs/Enums/TransactionTypeEnum";

interface TransactionItemProps {
    transactionValue: number
    transactionType: string
    subcategory: string
    description: string
}


export default function TransactionItem({ transactionValue, transactionType, subcategory, description }: TransactionItemProps) {

    const transactionValueFormatted = transactionValue.toLocaleString("pt-br",{
        style : "currency",
        currency : "BRL"
    })

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.description}>{description}</Text>
                
                    {transactionType === TransactionTypeEnum.INCOME ? 
                    <Text style={styles.transactionValueIncome}>{transactionValueFormatted}</Text> :
                    <Text style={styles.transactionValueExpense}> - {transactionValueFormatted}</Text> }
            </View>
            <View style={styles.content}>
                <Text style={styles.type}>{transactionType === TransactionTypeEnum.INCOME ? "Entrada" : "Saida"}</Text>
                <Text style={styles.subcategory}>{subcategory}</Text>
            </View>
        </TouchableOpacity>
    )
}