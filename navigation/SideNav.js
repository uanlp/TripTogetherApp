import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
//Screens:
import AuthScreen from "../screens/AuthScreen";

import LandingScreen from "../screens/LandingScreen";

import TripListScreen from "../screens/TripListScreen";
import QuizOverviewScreen from "../screens/Quiz/QuizOverviewScreen";
import QuizResultsScreen from "../screens/Quiz/QuizResultsScreen";
import QuizCoverScreen from "../screens/Quiz/QuizCoverScreen";

import QuizContentScreen from "../screens/Quiz/QuizContentScreen";
import AddMembersScreen from "../screens/Trips/AddMembersScreen";
import AddTaskScreen from "../screens/Trips/AddTaskScreen";
import TripTimelineScreen from "../screens/Trips/TripTimelineScreen";
import NewTripScreen from "../screens/Trips/NewTripScreen";

const Drawer = createDrawerNavigator();

export default function SideNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TripListScreen} />
      <Drawer.Screen
        name="Sign Out"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Quiz Overview Screen"
        component={QuizOverviewScreen}
      />
      <Drawer.Screen name="Quiz Cover Screen" component={QuizCoverScreen} />
      <Drawer.Screen name="Quiz Content Screen" component={QuizContentScreen} />
      <Drawer.Screen name="Quiz Results Screen" component={QuizResultsScreen} />

      {/* <Drawer.Screen name="Add Tasks Screen" component={AddTaskScreen} />
      <Drawer.Screen name="Add Members Screen" component={AddMembersScreen} />
      <Drawer.Screen
        name="Trip Timeline Screen"
        component={TripTimelineScreen}
      /> */}
      {/* <Drawer.Screen name="New Trip Screen" component={NewTripScreen} /> */}
      {/* <Drawer.Screen name="Landing Screen" component={LandingScreen} /> */}
    </Drawer.Navigator>
  );
}
