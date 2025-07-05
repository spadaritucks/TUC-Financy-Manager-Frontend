import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native"
import { styles } from "./styles"



type ButtonVariants = "link" | "destructive" | "success" | "default"



interface CustomButtonProps extends TouchableOpacityProps {
    variant : ButtonVariants
    title : string
}




export default function CustomButton ({variant, title, ...rest} : CustomButtonProps) {

    const styleButton = variant === "link" ? styles.link : variant === "success" ? styles.success :
    variant === "destructive" ? styles.destructive : styles.default

    const textStyleButton = variant === "link" ? styles.textLink : variant === "success" ? styles.textSuccess :
    variant === "destructive" ? styles.textDestructive : styles.textDefault
    
    return (
        <TouchableOpacity style={styleButton} activeOpacity={0.7} {...rest}>
            <Text style={textStyleButton}>{title}</Text>
        </TouchableOpacity>
    )

}