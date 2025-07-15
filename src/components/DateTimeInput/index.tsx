import { Control, Controller } from "react-hook-form";
import CustomButton, { CustomButtonProps } from "../Button";
import { useState } from "react";
import { Text, View } from "react-native";
import FormError from "../FormError";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";


interface DateTimePickerProps extends CustomButtonProps  {
    control: Control<any>
    name: string
    errorMessage?: string,
    title: string
}

export default function DateTimeInput({ control, name, errorMessage,title, ...rest }: DateTimePickerProps) {

    const [show, setShow] = useState<boolean>(false)

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <View style={styles.container}>
                    <CustomButton onPress={() => setShow(true)} title="Selecione a data" {...rest}/>
                    <Text style={styles.date}>{value ? "Data selecionada : " + new Date(value).toLocaleDateString() : title }</Text>
                    {show && <DateTimePicker
                        value={value ? new Date(value) : new Date()}
                        mode="date"
                        display="default"
                        onChange={(_, selectedDate) => {
                            setShow(false);
                            if (selectedDate) {
                                onChange(selectedDate);
                            }
                        }}
                    />}
                    {errorMessage && <FormError message={errorMessage} />}
                </View>
            )}

        />
    )
}