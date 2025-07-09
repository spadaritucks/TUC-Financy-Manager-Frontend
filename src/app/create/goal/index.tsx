import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import Select from "@/components/Select";
import { useEffect } from "react";

export const createGoalSchema = z.object({
    userId: z.string(),
    subCategoryId: z.string(),
    goalName: z.string(),
    targetValue: z.string(),
    startDate: z.string(), // pode validar como Zod.date().transform(...) depois
    endDate: z.string(),
    goalStatus: z.string(), // pode virar enum depois
});

const userId = "123e4567-e89b-12d3-a456-426614174000"

type GoalFormData = z.infer<typeof createGoalSchema>

export default function CreateGoal() {

    const { handleSubmit, control, formState: { errors }, setValue } = useForm<GoalFormData>({
        resolver: zodResolver(createGoalSchema)
    })

    useEffect(() => {
        if (userId) {
          setValue("userId", String(userId));
        }
      }, [userId]);

      setValue("goalStatus", "PENDING");

    async function SubmitForm(data : GoalFormData) {
        console.log(data)
    }

    
    

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Criar Nova Conta</Text>
                    <View style={styles.form}>

                    <Select
                            control={control}
                            label="Subcategoria"
                            items={[{ label: "Academia", value: "234e5678-e89b-12d3-a456-426614174002" }, { label: "Mercado", value: "234e5678-e89b-12d3-a456-426614174002" }]}
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

                        <CustomInput
                            label="Data inicial"
                            placeholder="29/11/2025"
                            inputMode="text"
                            control={control}
                            name="startDate"
                            errorMessage={errors.startDate?.message ? errors.startDate.message : undefined}
                        />

                        <CustomInput
                            label="Data final"
                            placeholder="29/11/2026"
                            inputMode="text"
                            control={control}
                            name="endDate"
                            errorMessage={errors.endDate?.message ? errors.endDate.message : undefined}
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