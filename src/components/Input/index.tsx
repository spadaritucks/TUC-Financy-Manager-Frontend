import { TextInput, View, TextInputProps, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/default-colors";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormError from "../FormError";

interface InputProps extends TextInputProps {
    label?: string
    control: Control<any>
    name: string
    errorMessage?: string
}

export default function CustomInput({ label, control, name, errorMessage, ...rest }: InputProps) {

    return (
        <Controller
            render={({ field: { onChange, value }}) => (
                <View style={styles.container}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholderTextColor={colors.gray[500]}
                        style={styles.input}
                        {...rest} />
                        {errorMessage && <FormError message={errorMessage}/>}
                      
                </View>
            )}
            control={control}
            name={name}
        />
    )
}