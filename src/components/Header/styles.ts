import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container:{
        width : "100%",
        height : 70,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        padding : 15,
        borderBottomColor: colors.gray[400],
        borderBottomWidth : 1
    },
    title:{
        fontSize : 18,
        fontWeight : "500"
    },
    dialog:{
        alignItems : "center",
        justifyContent : "center",
        gap : 10
    },
    username: {
        fontSize : 17
    },
    dialogActions: {
        flexDirection : "row",
        gap : 10
    },
    avatar: {
        width : 150,
        height: 150
    }
})