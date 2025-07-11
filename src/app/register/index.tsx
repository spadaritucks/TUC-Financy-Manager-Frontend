import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/FormError";
import { router } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import { UserService } from "@/services/UserService";



const registerUserSchema = z.object({
    userPhoto: z.any(),
    name: z.string({ message: "O nome é obrigatório" })
        .min(2, "O nome deve ter no mínimo 2 caracteres")
        .max(100, "O nome deve ter no máximo 100 caracteres"),
        
    email: z.string({ message: "O email é obrigatório" })
    .email({ message: "Insira um email valido" }),

    phone: z.string({ message: "O telefone é obrigatório" })
        .regex(
            /^\(\d{2}\) \d{5}-\d{4}$/,
            "Telefone deve estar no formato (11) 99999-9999"
        ),

    monthlyIncome: z.string({ message: "O salario é obrigatório" }),

    password: z.string({ message: "A senha é obrigatória" })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "A senha deve conter no mínimo 8 caracteres, com ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
        ),
    confirm_password: z.string({ message: "A confirmação da senha é obrigatória" })
})

type RegisterFormdata = z.infer<typeof registerUserSchema>


export default function Register() {

    const { handleSubmit, control, formState: { errors }, setValue } = useForm<RegisterFormdata>({
        resolver: zodResolver(registerUserSchema)
    })

    async function PickImage(onChange: (...event: any[]) => void) {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            onChange(result.assets[0].uri)
        }
    }




    async function SubmitForm(data: RegisterFormdata) {
        try {
            if (!(data.password === data.confirm_password)) {
                return Alert.alert("As duas senhas não correspondem")
            }

            await UserService.createUser({
                userPhoto: data.userPhoto,
                name: data.name,
                email: data.email,
                phone: data.phone,
                monthlyIncome: parseFloat(data.monthlyIncome),
                password: data.password
            })


            Alert.alert("Sucesso", "Usuario criado com sucesso")
            return router.back()
        } catch (error: any) {
            Alert.alert("Erro", error.message)
        }



    }



    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@/assets/logo-tfm.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Criar Nova Conta</Text>
                    <View style={styles.form}>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <>
                                    {value && <Image source={{ uri: value }} style={styles.imagePreview} />}
                                    <CustomButton title="Selecione uma foto de perfil (Opcional)" variant="default" onPress={() => PickImage(onChange)} />
                                </>
                            )}
                            name="userPhoto"
                            control={control}
                        />
                        <CustomInput
                            label="Nome"
                            placeholder="Insira o seu nome"
                            inputMode="text"
                            control={control}
                            name="name"
                            errorMessage={errors.name?.message ? errors.name.message : undefined}
                        />

                        <CustomInput
                            label="Email"
                            placeholder="jonhdoe@example.com"
                            inputMode="email"
                            control={control}
                            name="email"
                            errorMessage={errors.email?.message ? errors.email.message : undefined}
                        />

                        <CustomInput
                            label="Telefone"
                            placeholder="(11) 99999-9999"
                            inputMode="email"
                            control={control}
                            name="phone"
                            errorMessage={errors.phone?.message ? errors.phone.message : undefined}
                        />

                        <CustomInput
                            label="Salario (p/mês)"
                            placeholder="1500"
                            inputMode="numeric"
                            control={control}
                            name="monthlyIncome"
                            errorMessage={errors.monthlyIncome?.message ? errors.monthlyIncome.message : undefined}
                        />

                        <CustomInput
                            label="Senha"
                            placeholder="Insira a sua senha"
                            secureTextEntry={true}
                            control={control}
                            name="password"
                            errorMessage={errors.password?.message ? errors.password.message : undefined}
                        />
                        <CustomInput
                            label=" Confirme sua Senha"
                            placeholder="Confirme sua senha"
                            secureTextEntry={true}
                            control={control}
                            name="confirm_password"
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