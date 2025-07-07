import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/default-colors";
import MaterialIcons from '@react-native-vector-icons/material-icons';


interface GoalTotalProps {
    goalTotal: number
}


export default function GoalTotal() {

    return (         
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.titleHeader}>Numeros de Metas</Text>
            </View>
            <View style = {styles.content}>
                <View style = {styles.data}>
                    <Text style = {styles.counter}>2</Text>
                    <View style = {styles.titles}>
                        <Text style = {styles.title}>Em andamento</Text>
                        <MaterialIcons name="pending" size={18} color={colors.blue[400]} />
                    </View>
                </View>
                <View style = {styles.data}>
                    <Text style = {styles.counter}>2</Text>
                    <View style = {styles.titles}>
                        <Text style = {styles.title}>Concluido</Text>
                        <MaterialIcons name="check-circle" size={18} color={colors.green[700]} />
                    </View>
                </View>
                <View style = {styles.data}>
                    <Text style = {styles.counter}>2</Text>
                    <View style = {styles.titles}>
                        <Text style = {styles.title}>Expirado</Text>
                        <MaterialIcons name="timer-off" size={18} color={colors.red[400]} />
                    </View>
                </View>
            </View>
        </View>
    )
}