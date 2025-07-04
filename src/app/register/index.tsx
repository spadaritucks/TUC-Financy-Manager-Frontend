import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/FormError";

const registerUserSchema = z.object({
    name: z.string({ message: "O nome é obrigatório" }),
    email: z.string({ message: "O email é obrigatório" }).email({ message: "Insira um email valido" }),
    phone: z.string({ message: "O telefone é obrigatório" }),
    monthyIncome: z.string({ message: "O salario é obrigatório" }),
    password: z.string({ message: "A senha é obrigatório" }),
    confirm_password: z.string()
})

type RegisterFormdata = z.infer<typeof registerUserSchema>


export default function Register() {

    const { handleSubmit, register, control, formState: { errors } } = useForm<RegisterFormdata>({
        resolver: zodResolver(registerUserSchema)
    })

    async function SubmitForm(data: RegisterFormdata) {

        console.log(data)
        console.log("log")
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@/assets/logo-tfm.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Registrar</Text>
                    <View>
                        <CustomButton title="Selecione uma foto de perfil (Opcional)" variant="default" />
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
                            name="monthyIncome"
                            errorMessage={errors.monthyIncome?.message ? errors.monthyIncome.message : undefined}
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
                            name="password_confirmation"
                        />
                        <View style={styles.formFooter}>
                            <CustomButton title="Enviar" variant="default" onPress={handleSubmit(SubmitForm)} />
                            <CustomButton title="Crie uma conta" variant="link" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}