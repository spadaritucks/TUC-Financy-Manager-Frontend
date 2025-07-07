import { ColorValue, DimensionValue, View } from "react-native";

interface SeparatorProps {
    color : ColorValue,
    height: DimensionValue,
    width: DimensionValue
}

export default function Separator ({color, height, width} : SeparatorProps) {

    return <View style={ { backgroundColor: color, height : height, width : width }} />
}