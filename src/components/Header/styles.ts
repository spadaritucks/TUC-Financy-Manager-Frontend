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
    avatar: {
        width : 50,
        height: 50
    }
})