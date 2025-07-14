import { Text, View } from "react-native";

interface TransactionDataProps {
    label?: string
    labelColor?: string
    labelSize?: number
    value: string | number
    valueColor: string
    valueSize: number
}

export default function TransactionData({ label, labelColor, labelSize, value, valueColor, valueSize }: TransactionDataProps) {

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 5 }}>
            {label && <Text style={{ color: labelColor, fontSize: labelSize, fontWeight: "500" }}>{label} :  </Text>}
            <Text style={{ color: valueColor, fontSize: valueSize }}>{value}</Text>
        </View>
    )
}