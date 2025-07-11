import { useMiddleware } from '@/utils/middleware';
import { Stack } from 'expo-router';
import React from 'react';

export default function FormsLayout() {
  useMiddleware()
  return <Stack screenOptions={{headerShown : false}}/>
} 