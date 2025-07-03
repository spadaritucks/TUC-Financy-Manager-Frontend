import { TextInput, View, TextInputProps, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/default-colors";

interface InputProps extends TextInputProps {
    label? : string
}

export default function CustomInput ({label, ...rest} : InputProps) {

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholderTextColor={colors.gray[500]} style={styles.input} {...rest} />
        </View>
    )
}