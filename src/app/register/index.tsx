import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Register() {

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@/assets/logo-tfm.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Registrar</Text>
                    <View>
                        <CustomButton title="Selecione uma foto de perfil (Opcional)" variant="default" />
                        <CustomInput label="Nome" placeholder="Insira o seu nome" inputMode="text" />
                        <CustomInput label="Email" placeholder="jonhdoe@example.com" inputMode="tel" />
                        <CustomInput label="Telefone" placeholder="(11) 99999-9999" inputMode="email" />
                        <CustomInput label="Salario (p/mês)" placeholder="1500" inputMode="numeric" />
                        <CustomInput label="Senha" placeholder="Insira a sua senha" secureTextEntry={true} />
                        <CustomInput label=" Confirme sua Senha" placeholder="Confirme sua senha" secureTextEntry={true} />
                        <View style={styles.formFooter}>
                            <CustomButton title="Enviar" variant="default" />
                            <CustomButton title="Crie uma conta" variant="link" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}