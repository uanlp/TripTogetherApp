import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
} from "react-native";
import { HeaderComponentWithBackButton } from "../components/ScreenHeader";
import TripCard from "../components/TripCard";
import TripData from "../config/staticdata.json";
import notifications from "../config/notifications.json";
export default function NotificationScreen(props) {
  const [showNewTrip, setShowNewTrip] = React.useState(false);
  console.log("Notifications list >>>");
  console.log(TripData.defaultPlaces);
  console.log(notifications.notifications);

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Notifications"
      />

      {/* <Text>List of Trips</Text> */}
      <ScrollView style={styles.scrollView}>
        {notifications.notifications.map((notification) => {
          return (
            <View style={styles.notificationContainer}>
              <View style={styles.leftSection}>
                <Image
                  style={styles.tripIcon}
                  source={{
                    uri: notification.image,
                  }}
                />
              </View>
              <View style={styles.rightSection}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#3F3F3F",
                  }}
                >
                  {notification.string}
                </Text>
                <Text
                  style={{
                    color: "#6F6F6F",
                  }}
                >
                  {notification.date}
                </Text>
              </View>
            </View>
          );
        })}
        {/* <Text>No Notifications</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
    // alignItems: "center",
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 10,
  },
  newTripButton: {
    margin: 10,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  takeQuizCard: {
    backgroundColor: "#032224",
    paddingTop: 25,
    height: 150,
    padding: 15,
    // marginBottom: 20,
    shadowColor: "#C0C0C0",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    // justifyContent: "center",
    alignItems: "center",
  },
  takeQuizText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    // color: "#032224",
    textAlign: "center",
  },
  tripIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rightSection: {
    width: "75%",
    height: 60,
    // backgroundColor: "powderblue",
    // alignItems: "center",
    justifyContent: "center",
  },
  leftSection: {
    width: "25%",
    height: 60,
    paddingLeft: 10,
    // backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#C0C0C0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    // justifyContent: "center"
  },
});
//
