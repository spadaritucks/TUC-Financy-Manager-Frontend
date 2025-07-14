import { Modal, Text, View } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";
import MaterialIcons from "@react-native-vector-icons/material-icons"
import { colors } from "@/theme/default-colors";
import Separator from "../Separator";

interface DialogProps {
    title: string
    body: ReactNode
    footer?: ReactNode
    close: () => void
    show : boolean
}

export default function Dialog({ title, body, footer, close, show }: DialogProps) {



    return (

        <Modal
            visible={show}
            transparent
            animationType="fade"
        >
            <View style={styles.container}>
                <View style={styles.overlay}></View>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <MaterialIcons name="close" size={24} color={colors.gray[500]} onPress={close} />
                    </View>
                    <Separator width={"90%"} height={1} color={colors.gray[400]} />
                    <View style={styles.body}>
                        {body}
                    </View>
                    <Separator width={"90%"} height={1} color={colors.gray[400]} />
                    <View style={styles.footer}>
                        {footer}
                    </View>
                </View>
            </View>
        </Modal>
    )
}