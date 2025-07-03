import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    link: {
        backgroundColor: "transparent",
        padding: 15,
        borderRadius : 10,
    },
    success: {
        backgroundColor: colors.green[500],
        padding: 15,
        borderRadius : 10
    },
    destructive: {
        backgroundColor: colors.red[400],
        padding: 15,
        borderRadius : 10
    },
    default: {
        backgroundColor : colors.sky[500],
        padding: 15,
        borderRadius : 10
    },
    textLink : {
        color : colors.gray[600]
    },
    textSuccess : {
        color : colors.white
    },
    textDestructive : {
        color : colors.white
    },
    textDefault : {
        color : colors.white
    },
})