import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/default-colors";
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { TransactionResponseDTO } from "@/types/DTOs/Transactions/TransactionResponseDTO";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useCallback, useEffect, useState } from "react";
import { TransactionTypeEnum } from "@/types/DTOs/Enums/TransactionTypeEnum";
import { useFocusEffect } from "expo-router";

interface TranscationTotal {
    transactions : TransactionResponseDTO[] | undefined
}

export default function TransactionTotal({transactions} : TranscationTotal) {


    const month = dayjs().format("MMMM")
    const year = dayjs().year()

    const [income, setIncome] = useState<number>(0)
    const [expense, setExpense] = useState<number>(0)

    function incomeMonthAmount () {
        const incomeValues = transactions ? 
        transactions.filter(transaction => transaction.transactionType == TransactionTypeEnum.INCOME ) : undefined

        const expenseValues = transactions ? 
        transactions.filter(transaction => transaction.transactionType == TransactionTypeEnum.EXPENSE ) : undefined

        const incomeSum = incomeValues ? incomeValues.reduce((acc, curr) => acc + curr.transactionValue, 0) : 0
        const expenseSum = expenseValues ? expenseValues.reduce((acc, curr) => acc + curr.transactionValue, 0) : 0
        setIncome(incomeSum)
        setExpense(expenseSum)
    }

    useFocusEffect(
        useCallback(() => {
            incomeMonthAmount()
        },[income, expense])
    )

    return (
        <View style  = {styles.container}>
            <View style ={styles.header}>
                <Text style ={styles.date}>{month} de {year}</Text>
            </View>
            <View style={styles.data}>
                <View style={styles.content}>
                    <Text style={styles.amount}>{income.toLocaleString('pt-br',{
                        style : "currency",
                        currency : "BRL"
                    })}</Text>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Entrada</Text>
                        <MaterialIcons name="arrow-circle-up" size={18} color={colors.green[700]} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.amount}>{expense.toLocaleString("pt-br",{
                        style: "currency",
                        currency : "BRL"
                    })}</Text>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Saida</Text>
                        <MaterialIcons name="arrow-circle-up" size={18} color={colors.red[400]} />
                    </View>
                </View>

            </View>
        </View>
    )
}