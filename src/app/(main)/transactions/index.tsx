import Header from "@/components/Header";
import { Alert, Button, FlatList, Modal, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";
import TransactionTotal from "@/components/TransactionTotal";
import TransactionItem from "@/components/TransactionItem";
import Separator from "@/components/Separator";
import { colors } from "@/theme/default-colors";
import { useAuth } from "@/context/auth";
import { TransactionService } from "@/services/TransactionService";
import { useCallback, useEffect, useState } from "react";
import { TransactionResponseDTO } from "@/types/DTOs/Transactions/TransactionResponseDTO";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BottomRoutesProps } from "@/routes/bottom.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackRoutesList } from "@/routes/stack.routes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";




export default function Transactions({navigation} : BottomRoutesProps<"transactions">) {

    const stackNavigation = useNavigation<NativeStackNavigationProp<StackRoutesList>>();

    const { authData } = useAuth()
    const [transactions, setTransactions] = useState<TransactionResponseDTO[]>([])


    const currentMonth = dayjs().month()
    const currentYear = dayjs().year()

    const [picker, setPicker] = useState<boolean>(false)
    const [month, setMonth] = useState<number>(currentMonth)
    const [year, setYear] = useState<number>(currentYear)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const dateHeader = dayjs().month(month).format("MMMM") + "/" + dayjs().year(year).format("YYYY")

    function ExtractMonthAndYearOfSelectedDate () {
        const newMonth = dayjs(selectedDate).month()
        const newYear = dayjs(selectedDate).year()
        setMonth(newMonth)
        setYear(newYear)
    }

    useEffect(() => {
        ExtractMonthAndYearOfSelectedDate()
    },[selectedDate])

   

    async function getCurrentMonthTransactions() {
        try {
            const id = authData && authData.user.id
            const response = await TransactionService.getCurrentMonthTransactionsByUserId(
                id,
                month + 1,
                year,
                0,
                10
            );
            setTransactions(response)
          
        } catch (error: any) {
            console.error(error)
        }
    }



    useFocusEffect(
        useCallback(()=> {
            getCurrentMonthTransactions()
        },[month,year])
    )



    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header title="Extrato" />
                <TransactionTotal transactions={transactions} />
                <View style={styles.actions}>
                    <CustomButton title="Adicionar transação" variant="success" onPress={() => stackNavigation.navigate("create_transaction")} />
                    <CustomButton title="Filtrar por Mês/Ano" variant="default" onPress={() => setPicker(true)} />

                </View>

                {picker && <DateTimePicker
                    value={selectedDate}
                    onChange={(_, date) => {
                        setPicker(false)
                        date && setSelectedDate(date)
                    }}
                    mode="date"
                    display="default"
                />}


                <View style={styles.contentList}>

                    <View style={styles.title}>
                        <Text style={styles.titleList}>Historico de Transações - ({dateHeader})</Text>
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
                            recurrent={item.recurrent} />)}
                        keyExtractor={transaction => transaction.id}
                        contentContainerStyle={styles.list}
                    />

                </View>

            </View>
        </SafeAreaView>
    )
}