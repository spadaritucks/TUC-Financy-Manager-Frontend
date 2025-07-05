import { Tabs } from "expo-router";
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { colors } from "@/theme/default-colors";

export default function MainLayout() {
    return <Tabs screenOptions=
        {{
            headerShown: false,
            tabBarInactiveTintColor: colors.gray[500],
            tabBarActiveTintColor: colors.sky[500],
        }}>
        <Tabs.Screen
            name="home/index" options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
            }} />
        <Tabs.Screen
            name="transactions/index"
            options={{
                title: "Extrato",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="list" color={color} size={size} />
            }} />
        <Tabs.Screen
            name="target/index"
            options={{
                title: "Metas",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="arrow-circle-up" color={color} size={size} />
            }} />
        <Tabs.Screen
            name="dashboard/index"
            options={{
                title: "Dashboard",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" color={color} size={size} />
            }} />


    </Tabs>
}