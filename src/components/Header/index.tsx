import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface HeaderProps {
    title: string
}

export default function Header({ title }: HeaderProps) {

    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={require("@/assets/logo-tfm.png")} />
            <Text style ={styles.title}>{title}</Text>
            <TouchableOpacity >
                <MaterialIcons name="settings" size={24} />
            </TouchableOpacity>
        </View>
    )
}