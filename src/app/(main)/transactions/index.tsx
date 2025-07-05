import Header from "@/components/Header";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";
import TransactionTotal from "@/components/TransactionTotal";

export default function Transactions () {

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Header title="Extrato"/>
                <TransactionTotal/>
            </ScrollView>
        </SafeAreaView>
    )
}