import { AuthProvider } from '@/context/auth';
import React from 'react';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import Login from '../app';
import Register from '../app/register';
import { TabsLayout } from './bottom.routes';
import CreateTransaction from '@/app/create/transaction';
import CreateGoal from '@/app/create/goal';

export type StackRoutesList = {
  login: undefined
  register: undefined
  tabs: undefined
  create_transaction: undefined
  create_goal: undefined
}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>


const Stack = createNativeStackNavigator<StackRoutesList>();

export default function StackLayout() {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='login'>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="tabs" component={TabsLayout} />
      <Stack.Screen name="create_transaction" component={CreateTransaction} />
      <Stack.Screen name="create_goal" component={CreateGoal} />
    </Stack.Navigator>
  );
}