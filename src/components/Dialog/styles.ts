import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000, // Garante que fique acima de tudo
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)", // fundo escurecido
    },
    content: {
      width: "90%",
      maxWidth: 400,
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 20,
      zIndex: 1001,
      elevation: 5, // Android sombra
      shadowColor: "#000", // iOS sombra
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
    },
    header: {
      paddingBottom: 10,
      flexDirection : "row",
      width : "100%",
      justifyContent : "space-between"
      
    },
    title:{
        fontSize: 16,
        fontWeight : 500
    },
    body: {
      paddingVertical: 15,
    },
    footer: {
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: 10,
    },
  });
  