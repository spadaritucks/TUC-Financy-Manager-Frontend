import CustomButton from "@/components/Button";
import Header from "@/components/Header";
import { useAuth } from "@/context/auth";
import { storage } from "@/utils/storage";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    
    const {logout} = useAuth()


    return (
        <SafeAreaView>
            <ScrollView>
                <Header title="Home" />
                <CustomButton title="Logout" variant="default" onPress={logout}/>
            </ScrollView>
        </SafeAreaView>         
    )
}