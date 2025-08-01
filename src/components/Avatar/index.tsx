import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface AvatarProps extends TouchableOpacityProps {
    userPhoto? : string
}


export default function Avatar({ userPhoto, ...rest }: AvatarProps) {

    

    return (
        <TouchableOpacity activeOpacity={0.8} {...rest}>
            {userPhoto && <Image style={styles.avatar} source={{uri : userPhoto}} />}
            {/* {logo ?  <Image style={styles.avatar} source={logo} />
            :  <Image style={styles.avatar} source={require("@/assets/empty-avatar.png")} />} */}
        </TouchableOpacity>
    )
}
