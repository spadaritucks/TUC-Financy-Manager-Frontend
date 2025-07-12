import { AuthProvider } from '@/context/auth';
import { Stack } from 'expo-router';
import React from 'react';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';


export default function RootLayout() {
  dayjs.locale('pt-br');
  return (

    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>

  )

} 