import { Image, TouchableOpacity,TouchableOpacityProps } from "react-native";
import { styles } from "./styles";



export default function Avatar ({...rest} : TouchableOpacityProps) {

    const logo = require("@/assets/logo-tfm.png")

    return (
        <TouchableOpacity activeOpacity={0.8} {...rest}>
            {logo ?  <Image style={styles.avatar} source={logo} />
            :  <Image style={styles.avatar} source={require("@/assets/empty-avatar.png")} />}
        </TouchableOpacity>
    )
}
