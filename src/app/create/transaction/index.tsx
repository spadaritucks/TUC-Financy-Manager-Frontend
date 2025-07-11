import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { useForm } from "react-hook-form";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useFocusEffect } from "expo-router";
import Select from "@/components/Select"
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/auth";
import { TransactionStatus } from "@/types/DTOs/Enums/TransactionStatus";
import { TransactionService } from "@/services/TransactionService";
import { TransactionTypeEnum } from "@/types/DTOs/Enums/TransactionTypeEnum";
import { SubcategoryService } from "@/services/SubcategoryService";
import { SubcategoryResponseDTO } from "@/types/DTOs/Subcategory/SubcategoryResponseDTO";



export const createTransactionSchema = z.object({
    userId: z.string(),
    subCategoryId: z.string({ message: "Subcategoria é obrigatório" }),
    transactionType: z.string({ message: "Tipo de transação é obrigatório" }), // pode virar enum depois: INCOME, EXPENSE etc.
    transactionValue: z.string({ message: "Valor da transação é obrigátorio" }),
    description: z.string({ message: "Descrição é obrigatória" }),
    transactionStatus: z.string(), // pode virar enum depois: PENDING, COMPLETED etc.
});


type TransactionFormData = z.infer<typeof createTransactionSchema>

export default function CreateTransaction() {

    const { handleSubmit, control, formState: { errors }, setValue } = useForm<TransactionFormData>({
        resolver: zodResolver(createTransactionSchema)
    })

    const { authData } = useAuth()
    const userId = authData ? authData.user.id : null
    const [subCategories, setSubcategories] = useState<SubcategoryResponseDTO[]>()

    useEffect(() => {
        if (userId) {
            setValue("userId", String(userId));
        }
    }, [userId]);

    async function getSubcategories() {
        const response = await SubcategoryService.getAllSubcategories(0, 10)
        setSubcategories(response)
    }


    useFocusEffect(useCallback(() => {
        getSubcategories()
    }, []))


    setValue("transactionStatus", TransactionStatus.COMPLETED);



    async function SubmitForm(data: TransactionFormData) {

        try {
            await TransactionService.createTransaction({
                userId: data.userId,
                subCategoryId: data.subCategoryId,
                transactionType: data.transactionType as TransactionTypeEnum,
                transactionValue: parseFloat(data.transactionValue),
                description: data.description,
                transactionStatus: data.transactionStatus as TransactionStatus
            })

            Alert.alert("Sucesso", "Valor Registrado com sucesso")

        } catch (error: any) {
            Alert.alert("Erro", error.message)
        }
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled={true}>
                <View style={styles.content}>
                    <Text style={styles.title}>Nova Transação</Text>
                    <View style={styles.form}>

                        <Select
                            control={control}
                            label="Tipo da Transação"
                            items={[{ label: "Entrada", value: "INCOME" }, { label: "Saida", value: "EXPENSE" }]}
                            name="transactionType"
                            errorMessage={errors.transactionType?.message ? errors.transactionType.message : undefined}
                        />

                        <Select
                            control={control}
                            label="Subcategoria"
                            items={subCategories &&
                                subCategories.map(subCategory => ({ label: subCategory.subcategoryName, value: subCategory.id })) || []}
                            name="subCategoryId"
                            errorMessage={errors.subCategoryId?.message ? errors.subCategoryId.message : undefined}
                        />



                        <CustomInput
                            label="Valor da transação"
                            placeholder="5000"
                            inputMode="numeric"
                            control={control}
                            name="transactionValue"
                            errorMessage={errors.transactionValue?.message ? errors.transactionValue.message : undefined}
                        />

                        <CustomInput
                            label="Descrição"
                            placeholder="Pagamaento da Conta de Agua"
                            inputMode="text"
                            control={control}
                            name="description"
                            errorMessage={errors.description?.message ? errors.description.message : undefined}
                        />




                        <View style={styles.formFooter}>
                            <CustomButton title="Enviar" variant="default" onPress={handleSubmit(SubmitForm)} />
                            <CustomButton title="Voltar" variant="link" onPress={() => router.back()} />
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}