import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator()
export default function FavoriteNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Favorite'  component={Favorites}/>
    </Stack.Navigator>
  )
}