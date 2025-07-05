import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/default-colors";
import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function TransactionTotal() {

    return (
        <View style  = {styles.container}>
            <View style ={styles.header}>
                <Text style ={styles.date}>Julho de 2025</Text>
            </View>
            <View style={styles.data}>
                <View style={styles.content}>
                    <Text style={styles.amount}>R$ 2000,00</Text>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Entrada</Text>
                        <MaterialIcons name="arrow-circle-up" size={18} color={colors.green[700]} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.amount}>R$ 1000,00</Text>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Saida</Text>
                        <MaterialIcons name="arrow-circle-up" size={18} color={colors.red[400]} />
                    </View>
                </View>

            </View>
        </View>
    )
}