import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account'

const Stack = createStackNavigator()
export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Account'  component={Account}/>
    </Stack.Navigator>
  )
}