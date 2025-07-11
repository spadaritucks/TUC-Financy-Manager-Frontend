import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { useForm } from "react-hook-form";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useFocusEffect } from "expo-router";
import Select from "@/components/Select";
import { useCallback, useEffect, useState } from "react";
import { SubcategoryResponseDTO } from "@/types/DTOs/Subcategory/SubcategoryResponseDTO";
import { useAuth } from "@/context/auth";
import { SubcategoryService } from "@/services/SubcategoryService";
import { GoalStatus } from "@/types/DTOs/Enums/GoalStatus";
import { GoalService } from "@/services/GoalService";
import DateTimeInput from "@/components/DateTimeInput";

export const createGoalSchema = z.object({
    userId: z.string(),
    subCategoryId: z.string(),
    goalName: z.string(),
    targetValue: z.string(),
    startDate: z.date(), // pode validar como Zod.date().transform(...) depois
    endDate: z.date(),
    goalStatus: z.string(), // pode virar enum depois
});


type GoalFormData = z.infer<typeof createGoalSchema>

export default function CreateGoal() {

    const { handleSubmit, control, formState: { errors }, setValue } = useForm<GoalFormData>({
        resolver: zodResolver(createGoalSchema)
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

    setValue("goalStatus", GoalStatus.InProgress);

    async function SubmitForm(data: GoalFormData) {
        console.log(data)
        try {
            await GoalService.createGoal({
                userId: data.userId,
                subCategoryId: data.subCategoryId,
                goalName: data.goalName,
                targetValue: parseFloat(data.targetValue),
                startDate: data.startDate.toISOString(),
                endDate: data.startDate.toISOString(),
                goalStatus: data.goalStatus as GoalStatus

            })

            Alert.alert("Sucesso", "Meta registrada com sucesso")

        } catch (error: any) {
            Alert.alert("Erro", error.message)
        }
    }




    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled={true}>
                <View style={styles.content}>
                    <Text style={styles.title}>Criar Nova Conta</Text>
                    <View style={styles.form}>

                        <Select
                            control={control}
                            label="Subcategoria"
                            items={subCategories &&
                                subCategories.map(subCategory => ({ label: subCategory.subcategoryName, value: subCategory.id })) || []}
                            name="subCategoryId"
                            errorMessage={errors.subCategoryId?.message ? errors.subCategoryId.message : undefined}
                        />

                        <CustomInput
                            label="Nome da Meta"
                            placeholder="Juntar 2000 reais nesse mês"
                            inputMode="text"
                            control={control}
                            name="goalName"
                            errorMessage={errors.goalName?.message ? errors.goalName.message : undefined}
                        />

                        <CustomInput
                            label="Valor a ser Atingido"
                            placeholder="5000"
                            inputMode="numeric"
                            control={control}
                            name="targetValue"
                            errorMessage={errors.targetValue?.message ? errors.targetValue.message : undefined}
                        />



                        <View style={styles.dateTimeInputs}>
                            <DateTimeInput
                                control={control}
                                name="startDate"
                                title="Escolha data inicial"
                                errorMessage={errors.startDate?.message ? errors.startDate.message : undefined}
                            />

                            <DateTimeInput
                                control={control}
                                name="endDate"
                                title="Escolha a data de expiração"
                                errorMessage={errors.endDate?.message ? errors.endDate.message : undefined}
                            />
                        </View>


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