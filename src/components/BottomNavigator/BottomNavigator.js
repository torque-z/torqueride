import { StyleSheet, Image } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../../screens/HomeScreen/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import BookingFlow from "../../screens/BookingFlowScreen/BookingFlow";
import FavScreen from "../../screens/FavScreen/FavScreen";
import { MaterialIcons } from "@expo/vector-icons";

import { Foundation } from "@expo/vector-icons";

export default function BottomNavigator() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: "#42f44b",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              // <Image
              //   source={require("../../icons/home.png")}
              //   style={{ width: 30, height: 30 }}
              // />
              <Foundation name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="StatsStack"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" size={24} color="black" />
              // <Image
              //   source={require("../../icons/stats2.png")}
              //   style={{ width: 27, height: 27 }}
              // />
            ),
          }}
        />
        <Tab.Screen
          name="addStack"
          component={BookingFlow}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color, size }) => (
              // <Image
              //   source={require("../../icons/add1.png")}
              //   style={{ width: 50, height: 50, marginTop: 15 }}
              // />
              <Ionicons name="md-compass-sharp" size={24} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="cardStack"
          component={FavScreen}
          options={{
            tabBarLabel: "Fav",
            tabBarIcon: ({ color, size }) => (
              // <Image
              //   source={require("../../icons/credit-card1.png")}
              //   style={{ width: 40, height: 40, marginTop: 5 }}
              // />
              <MaterialIcons name="favorite" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
