import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { HeaderComponentWithTitle } from "../../components/ScreenHeader";
export default function QuizResultsScreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithTitle
        headerProps={props}
        screenTitle="Quiz Results"
      />

      <Text style={styles.p}>
        {" "}
        Based on your answers we think you would really like:{" "}
      </Text>
      <Text style={styles.title}>Paris</Text>

      <Image style={styles.image} source={require("../../assets/paris.jpg")} />

      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate({
            name: "NewTrips",
            params: { showParisTrip: true, tripName: "Paris", isAdmin: true },
          })
        }
        style={styles.continueButton}
      >
        <Text style={styles.continue}>Create Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate("TripListScreen")}
        style={styles.continueButton}
      >
        <Text style={styles.continue}>Go Back Home</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  continue: {
    color: "white",
    textAlign: "center",
    paddingVertical: 15,
    fontSize: 14,
    fontWeight: "bold",
  },

  continueButton: {
    backgroundColor: "#032224",
    width: "95%",

    margin: 10,
  },
  p: {
    fontSize: 14,
    fontWeight: "bold",
    // margin: 5,
    color: "#1F1F1F",
  },
  title: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#032224",
  },
});
