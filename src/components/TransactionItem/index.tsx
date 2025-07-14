import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TransactionTypeEnum } from "@/types/DTOs/Enums/TransactionTypeEnum";
import { useState } from "react";
import Dialog from "../Dialog";
import { RecurrenceFrequency } from "@/types/DTOs/Enums/RecurrenceFrequency";
import dayjs from "dayjs";
import TransactionData from "./TransactionData";
import { colors } from "@/theme/default-colors";

interface TransactionItemProps {
    transactionValue: number
    transactionType: string
    subcategory: string
    description: string
    transactionDate: string
    recurrent: boolean
    recurrenceFrequency: string
}


export default function TransactionItem({
    transactionValue,
    transactionType,
    subcategory,
    description,
    transactionDate,
    recurrenceFrequency,
    recurrent }: TransactionItemProps) {

    const transactionValueFormatted = transactionValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    const [modal, setModal] = useState<boolean>(false)

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => setModal(true)}>
                <View style={styles.content}>
                    <Text style={styles.description}>{description}</Text>

                    {transactionType === TransactionTypeEnum.INCOME ?
                        <Text style={styles.transactionValueIncome}>{transactionValueFormatted}</Text> :
                        <Text style={styles.transactionValueExpense}> - {transactionValueFormatted}</Text>}
                </View>
                <View style={styles.content}>
                    <Text style={styles.type}>{transactionType === TransactionTypeEnum.INCOME ? "Entrada" : "Saida"}</Text>
                    <Text style={styles.subcategory}>{new Date(transactionDate).toLocaleDateString("pt-br")}</Text>
                </View>
            </TouchableOpacity>
            {modal && <Dialog title="Dados da Transação" show={modal} close={() => setModal(false)} body={
                <>
                    <View style={styles.dialogDate}>
                        <TransactionData
                            value={dayjs(transactionDate).format("d [de] MMMM [de] YYYY")}
                            valueColor={colors.gray[500]}
                            valueSize={16}
                        />
                    </View>
                    <View style={styles.dialogData}>
                        {transactionType === TransactionTypeEnum.INCOME ?
                            <TransactionData
                                label="Valor"
                                labelColor={colors.gray[500]}
                                labelSize={14}
                                value={transactionValueFormatted}
                                valueColor={colors.green[500]}
                                valueSize={14}
                            /> :
                            <TransactionData
                                label="Valor"
                                labelColor={colors.gray[500]}
                                labelSize={14}
                                value={transactionValueFormatted}
                                valueColor={colors.red[400]}
                                valueSize={14}
                            />}

                        <TransactionData
                            label="Subcategoria"
                            labelColor={colors.gray[500]}
                            labelSize={14}
                            value={subcategory}
                            valueColor={colors.gray[500]}
                            valueSize={14}
                        />
                        <TransactionData
                            label="Recorrencia"
                            labelColor={colors.gray[500]}
                            labelSize={14}
                            value={recurrent ? "Sim" : "Não"}
                            valueColor={colors.gray[500]}
                            valueSize={14}
                        />
                        {recurrent && <TransactionData
                            label="Frequencia"
                            labelColor={colors.gray[500]}
                            labelSize={14}
                            value={recurrenceFrequency === RecurrenceFrequency.DAILY ? "Diario"
                                : recurrenceFrequency === RecurrenceFrequency.WEEKLY ? "Semanal" :
                                    recurrenceFrequency === RecurrenceFrequency.MONTHLY ? "Mensal" :
                                        recurrenceFrequency === RecurrenceFrequency.YEARLY ? "Anual" : ""}
                            valueColor={colors.gray[500]}
                            valueSize={14}
                        />}
                    </View>
                </>
            }


            />}
        </>

    )
}