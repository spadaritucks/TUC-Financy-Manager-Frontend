import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { colors } from "@/theme/default-colors";
import Home from "@/app/(main)/home";
import Transactions from "@/app/(main)/transactions";
import Goal from "@/app/(main)/goal";
import Dashboard from "@/app/(main)/dashboard";

export type BottomRoutesList = {
    home: undefined
    transactions: undefined
    goals: undefined
    dashboard: undefined
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> = BottomTabScreenProps<BottomRoutesList, T>


const Tab = createBottomTabNavigator<BottomRoutesList>();

export function TabsLayout() {

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: colors.gray[500],
                tabBarActiveTintColor: colors.sky[500],
            }}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
                }} />
            <Tab.Screen
                name="transactions"
                component={Transactions}
                options={{
                    title: "Extrato",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="list" color={color} size={size} />
                }} />
            <Tab.Screen
                name="goals"
                component={Goal}
                options={{
                    title: "Metas",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="arrow-circle-up" color={color} size={size} />
                }} />
            <Tab.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" color={color} size={size} />
                }} />
        </Tab.Navigator>
    )
}