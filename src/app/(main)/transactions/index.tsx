import Header from "@/components/Header";
import { Alert, FlatList, Modal, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";
import TransactionTotal from "@/components/TransactionTotal";
import TransactionItem from "@/components/TransactionItem";
import Separator from "@/components/Separator";
import { colors } from "@/theme/default-colors";
import { router, useFocusEffect } from "expo-router";
import { useAuth } from "@/context/auth";
import { TransactionService } from "@/services/TransactionService";
import { useCallback, useState } from "react";
import { TransactionResponseDTO } from "@/types/DTOs/Transactions/TransactionResponseDTO";
import dayjs from "dayjs";

interface TransactionTotal {
    transactionsValues: []
}


export default function Transactions() {

    const { authData } = useAuth()
    const [transactions, setTransactions] = useState<TransactionResponseDTO[]>()

    const month = dayjs().month() + 1
    const year = dayjs().year()




    async function getCurrentMonthTransactions() {
        try {
            const id = authData && authData.user.id
            const response = await TransactionService.getCurrentMonthTransactionsByUserId(
                id,
                month,
                year,
                0,
                10
            );
            setTransactions(response)
        }catch(error: any){
            console.error(error)
        }
    }


    useFocusEffect(
        useCallback(() => {
            getCurrentMonthTransactions()
        }, [])
    )


    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header title="Extrato" />
                <TransactionTotal transactions={transactions} />
                <View style={styles.actions}>
                    <CustomButton title="Adicionar transação" variant="success" onPress={() => router.navigate("/create/transaction")} />
                    <CustomButton title="Baixar Extrato" variant="default" />
                </View>


                <View style={styles.contentList}>

                    <View style={styles.title}>
                        <Text style={styles.titleList}>Historico de Transações</Text>
                        <Separator color={colors.gray[400]} width={"90%"} height={2} />
                    </View>
                    <FlatList
                        data={transactions}
                        renderItem={({ item }) => (<TransactionItem
                            description={item.description}
                            transactionValue={item.transactionValue}
                            transactionType={item.transactionType}
                            subcategory="Compra"
                            transactionDate={item.transactionDate}
                            recurrenceFrequency={item.recurrenceFrequency}
                            recurrent = {item.recurrent} />)}
                        keyExtractor={transaction => transaction.id}
                        contentContainerStyle={styles.list}
                    />

                </View>

            </View>
        </SafeAreaView>
    )
}