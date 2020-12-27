import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideNav from "../navigation/SideNav";
// import AuthScreen from "./AuthScreen";
// import TripListScreen from "./TripListScreen";

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function HomeScreen(props) {
  return (
    <SideNav />
    // <Drawer.Navigator initialRouteName="Home">
    //   <Drawer.Screen name="Home" component={TripListScreen} />
    //   <Drawer.Screen name="Sign Out" component={AuthScreen} />
    // </Drawer.Navigator>
  );
}
