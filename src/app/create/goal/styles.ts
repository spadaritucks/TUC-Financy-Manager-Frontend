import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 20,
        padding : 20
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
        fontSize: 30,
        fontWeight: 500
    },
    form:{
        alignItems: "center"
    },
    imagePreview: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginBottom: 10
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