import CustomButton from "@/components/Button";
import Header from "@/components/Header";
import { useAuth } from "@/context/auth";
import { storage } from "@/utils/storage";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {




    return (
        <SafeAreaView>
            <ScrollView>
                <Header title="Home" />
            </ScrollView>
        </SafeAreaView>         
    )
}