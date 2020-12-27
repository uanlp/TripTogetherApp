import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AuthScreen from "../screens/AuthScreen";
import QuizOverviewScreen from "../screens/Quiz/QuizOverviewScreen";
import NewTripScreen from "../screens/Trips/NewTripScreen";
import LandingScreen from "../screens/LandingScreen";
import AddMembersScreen from "../screens/Trips/AddMembersScreen";
import AddTaskScreen from "../screens/Trips/AddTaskScreen";
import TripTimelineScreen from "../screens/Trips/TripTimelineScreen";
import QuizCoverScreen from "../screens/Quiz/QuizCoverScreen";
// import QuizFormatScreen from "../screens/Quiz/QuizFormatScreen";
import TaskConfirmation from "../screens/Trips/TaskConfirmation";
import QuizContentScreen from "../screens/Quiz/QuizContentScreen";
import QuizContentScreen2 from "../screens/Quiz/QuizContentScreen2";
import QuizContentScreen3 from "../screens/Quiz/QuizContentScreen3";
import QuizResultsScreen from "../screens/Quiz/QuizResultsScreen";
import TripListScreen from "../screens/TripListScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createStackNavigator();

export default function StackNav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizOverviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripListScreen"
          component={TripListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewTrips"
          component={NewTripScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddMember"
          component={AddMembersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripTimeline"
          component={TripTimelineScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizCoverScreen"
          component={QuizCoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizContentScreen"
          component={QuizContentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizContentScreen2"
          component={QuizContentScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizContentScreen3"
          component={QuizContentScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizResults"
          component={QuizResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TaskConfirmation"
          component={TaskConfirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
