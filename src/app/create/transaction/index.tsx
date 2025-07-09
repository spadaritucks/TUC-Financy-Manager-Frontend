import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import Select from "@/components/Select"
import { useEffect } from "react";



export const createTransactionSchema = z.object({
    userId: z.string(),
    subCategoryId: z.string(),
    transactionType: z.string(), // pode virar enum depois: INCOME, EXPENSE etc.
    transactionValue: z.string(),
    description: z.string(),
    transactionStatus: z.string(), // pode virar enum depois: PENDING, COMPLETED etc.
});

const userId = "123e4567-e89b-12d3-a456-426614174000"


type TransactionFormData = z.infer<typeof createTransactionSchema>

export default function CreateGoal() {

    const { handleSubmit, control, formState: { errors }, setValue } = useForm<TransactionFormData>({
        resolver: zodResolver(createTransactionSchema)
    })

    useEffect(() => {
        if (userId) {
          setValue("userId", String(userId));
        }
      }, [userId]);

      setValue("transactionStatus", "PENDING");

    async function SubmitForm(data: TransactionFormData) {
        console.log(data)
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@/assets/logo-tfm.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Criar Nova Conta</Text>
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
                            items={[{ label: "Academia", value: "234e5678-e89b-12d3-a456-426614174002" }, { label: "Mercado", value: "234e5678-e89b-12d3-a456-426614174002" }]}
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