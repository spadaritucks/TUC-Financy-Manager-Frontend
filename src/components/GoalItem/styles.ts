import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        alignItems : "center",
        justifyContent : "center",
        width : "100%",
        height : 100,
        borderWidth : 1,
        borderColor : colors.gray[400],
        padding : 10,
        marginTop : 10
    },
    content: {
        flexDirection : "row",
        justifyContent : "space-between",
        width : "100%"
    },
    description : {
        fontSize : 16,
        fontWeight : "500"
    },
    goalStatusExpired:{
        color : colors.red[400],
        fontSize : 14
    },
    goalStatusCompleted:{
        color : colors.green[500],
        fontSize : 14
    },
    goalStatusInProgress:{
        color : colors.sky[500],
        fontSize : 14
    },
    targetValue:{
        fontSize : 14,
        color : colors.sky[500]
    },
    endDate: {
        color : colors.gray[500],
        fontSize : 14
    },
})