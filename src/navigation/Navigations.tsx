import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";

const Tab = createBottomTabNavigator();

export default function Navigations() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
            tabBarLabel:"",
          tabBarIcon: () => renderPokeIcon(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "My account",
          tabBarIcon: () => <Icon name="user" color="#000" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeIcon() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top:-15 }}
    />
  );
}
