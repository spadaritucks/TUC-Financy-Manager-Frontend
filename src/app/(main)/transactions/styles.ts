import { colors } from "@/theme/default-colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safeAreaContainer:{
        flex : 1
    },
    container: {
        alignItems : "center",
        gap : 10,
        flex : 1
    },
    actions: {
        marginTop : 10,
        flexDirection : "row",
        gap : 10
    },
    contentList:{
        width : "100%",
        alignItems : "flex-start",
        padding : 10,
        flex : 1,

    },
    title:{
         width : "100%",
         gap : 10,
         padding: 10
    },
    titleList:{
        fontSize : 18,
        fontWeight : "500",
    },
    list:{
        alignItems : "center",
        marginTop : 10,
      
    }
})