import { AuthProvider } from '@/context/auth';
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  
  return (

      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>

  )

} 