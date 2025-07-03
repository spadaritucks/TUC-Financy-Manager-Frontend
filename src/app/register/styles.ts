import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding : 10
    },
    content: {
        flex : 1,
        alignItems: "center",
        gap: 10
    },
    logo: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: 500
    },
    formFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    link: {
        color: colors.blue[400]
    }
})