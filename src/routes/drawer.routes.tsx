import Account from '@/app/(config)/account'
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer'
import { TabsLayout } from './bottom.routes'
import StackLayout from './stack.routes'
import { MaterialIcons } from "@expo/vector-icons";
import Password from '@/app/(config)/password';
import Email from '@/app/(config)/email';

export type DrawerRoutesList = {
    account: undefined
    password: undefined
    email : undefined
    tabs: undefined
    stack: undefined
}

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>()

export default function DrawerLayout() {

    return (
        <Drawer.Navigator
            initialRouteName='stack'
            screenOptions={{
                headerShown: false,
                swipeEnabled: false
            }}
        >
            <Drawer.Screen
                name='account'
                component={Account}
                options={{
                    title: "Dados Pessoais",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="account-circle" color={color} size={size} />
                }}
            />
            <Drawer.Screen
                name='password'
                component={Password}
                options={{
                    title: "Alterar Senha",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="password" color={color} size={size} />
                }}
            />
                <Drawer.Screen
                name='email'
                component={Email}
                options={{
                    title: "Alterar Email",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="email" color={color} size={size} />
                }}
            />
            <Drawer.Screen
                name='tabs'
                component={TabsLayout}
                options={{ drawerLabelStyle: { display: "none", height: 0 } }}
            />
            <Drawer.Screen
                name='stack'
                component={StackLayout}
                options={{ drawerLabelStyle: { display: "none", height: 0, width : 0 } }}
            />
        </Drawer.Navigator>
    )
}