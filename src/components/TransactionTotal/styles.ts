import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 150,
        borderWidth: 1,
        borderColor: colors.gray[400],
        borderRadius: 10,
        padding: 30,
        marginTop: 10,
        gap : 2
    },
    header: {
        flexDirection: "row"
    },
    date:{
        color : colors.gray[500]
    },
    data: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    content: {
        alignItems: "flex-start"
    },
    titles: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    title: {
        fontSize: 14,
        color: colors.gray[500]
    },

    amount: {
        fontSize: 30,
        fontWeight: "500"
    }
})