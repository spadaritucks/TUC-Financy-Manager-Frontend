// import { useForm, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { TransactionTypeEnum } from "@/types/DTOs/Enums/TransactionTypeEnum";
import FormError from "../FormError";
import { styles } from "./styles";


interface SelectProps {
    label?: string
    control: Control<any>
    name: string
    errorMessage?: string
    items: { label: string, value: string }[],
    placeholder?: string;
}

export default function Select({ label, control, name, errorMessage, items, placeholder }: SelectProps) {

    const [open, setOpen] = useState(false);
    const [internalItems, setInternalItems] = useState(items);

    useEffect(() => {
        setInternalItems(items);
      }, [items]);

      
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Controller
                name={name}
                control={control}
                defaultValue={TransactionTypeEnum.INCOME}
                render={({ field: { onChange, value } }) => (
                    <DropDownPicker
                        style={styles.select}
                        open={open}
                        value={value}
                        listMode="SCROLLVIEW"
                        items={internalItems}
                        setOpen={setOpen}
                        setValue={(callback) => onChange(callback(value))}
                        setItems={setInternalItems}
                        placeholder={placeholder ?? "Selecione uma opção"}
                        zIndex={1000} // importante para o DropDown não sumir atrás de outros campos
                    />

                )}

            />
            {errorMessage && <FormError message={errorMessage} />}
        </View>
    );
}
