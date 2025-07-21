import Header from "@/components/Header";
import { BottomRoutesProps } from "@/routes/BottomRoutes";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({navigation} : BottomRoutesProps<"home">) {


    return (
        <SafeAreaView>
            <ScrollView>
                <Header title="Home" />
            </ScrollView>
        </SafeAreaView>         
    )
}