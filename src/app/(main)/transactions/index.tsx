import Header from "@/components/Header";
import { FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";
import TransactionTotal from "@/components/TransactionTotal";
import TransactionItem from "@/components/TransactionItem";
import Separator from "@/components/Separator";
import { colors } from "@/theme/default-colors";

interface TransactionTotal {
    transactionsValues: []
}

const transactions = [
    {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userId: "123e4567-e89b-12d3-a456-426614174000",
        subCategoryId: "234e5678-e89b-12d3-a456-426614174000",
        transactionType: "INCOME",
        transactionValue: 250.75,
        description: "Pagamento da fatura do cartão",
        transactionStatus: "PENDING",
        created_at: "2025-06-16T14:21:00.914+00:00",
        updated_at: "2025-06-16T14:21:00.914+00:00"
    },
    {
        id: "4fa85f64-5717-4562-b3fc-2c963f66afa7",
        userId: "123e4567-e89b-12d3-a456-426614174000",
        subCategoryId: "234e5678-e89b-12d3-a456-426614174001",
        transactionType: "EXPENSE",
        transactionValue: 100.00,
        description: "Compra no supermercado",
        transactionStatus: "COMPLETED",
        created_at: "2025-06-15T10:00:00.914+00:00",
        updated_at: "2025-06-15T10:00:00.914+00:00"
    },
    {
        id: "5fa85f64-5717-4562-b3fc-2c963f66afa8",
        userId: "123e4567-e89b-12d3-a456-426614174000",
        subCategoryId: "234e5678-e89b-12d3-a456-426614174002",
        transactionType: "INCOME",
        transactionValue: 500.00,
        description: "Salário",
        transactionStatus: "COMPLETED",
        created_at: "2025-06-10T08:30:00.914+00:00",
        updated_at: "2025-06-10T08:30:00.914+00:00"
    },


]

export default function Transactions() {

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header title="Extrato" />
                <TransactionTotal />
                <View style={styles.actions}>
                    <CustomButton title="Adicionar transação" variant="success" />
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
                            subcategory="Compra" />)}
                        keyExtractor={transaction => transaction.id}
                        contentContainerStyle={styles.list}
                    />
                   
                </View>

            </View>
        </SafeAreaView>
    )
}