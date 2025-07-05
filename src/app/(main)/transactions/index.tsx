import Header from "@/components/Header";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Transactions () {

    return(
        <SafeAreaView>
            <ScrollView>
                <Header title="Extrato"/>
            </ScrollView>
        </SafeAreaView>
    )
}