import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#b03a2e",
        headerStyle: { backgroundColor: "#fdf2e9" },
        headerShadowVisible: true,
        headerTintColor: "000",
        tabBarStyle: {
          backgroundColor: "#fdf2e9",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={20}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={20}
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
