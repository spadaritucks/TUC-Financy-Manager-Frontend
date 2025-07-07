import GoalTotal from "@/components/GoalTotal";
import Header from "@/components/Header";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomButton from "@/components/Button";

export default function Target() {

    return (
        <SafeAreaView style = {styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <Header title="Metas" />
                <GoalTotal/>
                <View style={styles.actions}>
                    <CustomButton title="Criar Meta" variant="success"/>
                </View>
            </ScrollView>
        </SafeAreaView> 
    )
}