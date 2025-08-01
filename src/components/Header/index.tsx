import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Avatar from "../Avatar";
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useState } from "react";
import Dialog from "../Dialog";
import CustomButton from "../Button";
import { useAuth } from "@/context/auth";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerRoutesList } from "@/routes/drawer.routes";

interface HeaderProps {
    title: string
}


export default function Header({ title }: HeaderProps) {

    const navigation = useNavigation<DrawerNavigationProp<DrawerRoutesList>>()

    const [dialog, setDialog] = useState<boolean>()
    const { authData, logout } = useAuth()

    async function onLogout () {
        const result =  await logout()
        result === true ? navigation.reset({
            index : 0,
            routes : [{
                name : "stack",
                params : {
                    screen : "login"
                }
            }]
        }) : null
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} >
                <MaterialIcons name="settings" size={30} onPress={() => navigation.openDrawer()}/>
            </TouchableOpacity>
          
            <Text style={styles.title}>{title}</Text>
            <Avatar userPhoto={authData?.user.userPhoto} onPress={() => setDialog(true)} />

            {dialog && <Dialog
                show={dialog}
                close={() => setDialog(false)}
                title="Ações do Usuario"
                body={
                    <>

                        <View style={styles.dialog}>
                            <Image style={styles.avatar} source={{uri : authData?.user.userPhoto}} />
                            <Text style={styles.username}>{authData?.user.name}</Text>

                            <View style={styles.dialogActions}>
                                <CustomButton title="Mudar Foto de Perfil" variant="default" />
                                <CustomButton title="Logout" variant="destructive" onPress={onLogout} />
                            </View>
                        </View>
                    </>
                }
            />}
        </View>
    )
}