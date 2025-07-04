import { Text } from "react-native";
import { styles } from "./styles";

interface FormErrorProps {
    message : string
}

export default function FormError ({message} : FormErrorProps) {

    return (
        <Text style={styles.text}>{message}</Text>
    )
}