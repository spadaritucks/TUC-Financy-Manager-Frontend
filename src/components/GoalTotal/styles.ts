import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        width: "95%",
        height: 150,
        borderWidth: 1,
        borderColor: colors.gray[400],
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        gap : 5,
    },
    header:{
        alignItems : "flex-start",
        width : "100%"
    },

    titleHeader : {
        color : colors.gray[500]
    },
    content:{
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        gap : 15
    },
    data: {
        alignItems : "center",
        gap : 5,
    },
    counter: {
        fontSize : 36,
        borderWidth : 1,
        borderColor: colors.gray[400],
        padding : 10,
        borderRadius : 8
    },
    titles:{
        flexDirection : "row",
        gap : 5
    },
    title: {
        
    }
})