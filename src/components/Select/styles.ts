import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        padding : 15,
        display: "flex",
        justifyContent: "flex-start",
        gap: 8
    },
    label: {
        fontWeight: "500"
    },
    select: {
        width: 350,
        height : 50,
        borderRadius: 8,
        padding: 10,
        color : colors.black,
        backgroundColor: colors.gray[400],
        borderWidth : 0
    }

})