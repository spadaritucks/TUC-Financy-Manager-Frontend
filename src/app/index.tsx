import { Alert, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import CustomInput from "@/components/Input";
import CustomButton from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/auth";
import { StackRoutesProps } from "@/routes/stack.routes";


const loginUserSchema = z.object({
    email: z.string({ message: "O email é obrigatório" }).email({ message: "Insira um email valido" }),
    password: z.string({ message: "A senha é obrigatório" }),
})

type LoginFormdata = z.infer<typeof loginUserSchema>


export default function Login({navigation} : StackRoutesProps<"login"> ) {


    const { handleSubmit, control, formState: { errors } } = useForm<LoginFormdata>({
        resolver: zodResolver(loginUserSchema)
    })
    const {login} = useAuth()

    

    async function SubmitLogin(data: LoginFormdata) {
        const result = await login(data)
        result === true ? navigation.reset({
            index: 0,
            routes: [
              {
                name: "tabs",
                params: { screen: "home" },
              },
            ],
          }) : null
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@/assets/logo-tfm.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Login do Usuario</Text>
                    <View>
                        <CustomInput
                            label="Email"
                            placeholder="Insira o seu Email"
                            inputMode="email"
                            control={control}
                            name="email"
                            errorMessage={errors.email?.message ? errors.email.message : undefined}
                        />
                        <CustomInput
                            label="Senha"
                            placeholder="Insira a sua Senha"
                            secureTextEntry={true}
                            control={control}
                            name="password"
                            errorMessage={errors.password?.message ? errors.password.message : undefined}
                        />
                        <View style={styles.formFooter}>
                            <CustomButton title="Enviar" variant="default" onPress={handleSubmit(SubmitLogin)} />
                            <CustomButton title="Crie uma conta" variant="link" onPress={() => navigation.navigate("register")} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}