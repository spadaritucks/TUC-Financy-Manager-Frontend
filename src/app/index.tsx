import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import CustomInput from "@/components/Input";
import CustomButton from "@/components/Button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@/assets/logo-tfm.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Login do Usuario</Text>
                    <View>
                        <CustomInput label="Email" placeholder="Insira o seu Email" inputMode="email" />
                        <CustomInput label="Senha" placeholder="Insira a sua Senha" secureTextEntry={true} />
                        <View style={styles.formFooter}>
                            <CustomButton title="Enviar" variant="default" />
                            <CustomButton title="Crie uma conta" variant="link" onPress={() => router.navigate("/register")} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}