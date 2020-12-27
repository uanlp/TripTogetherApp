import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { HeaderComponent } from "../components/ScreenHeader";
import TripCard from "../components/TripCard";
import TripData from "../config/staticdata.json";
export default function TripListScreen(props) {
  const [showNewTrip, setShowNewTrip] = React.useState(false);
  const [showParisTrip, setShowParisTrip] = React.useState(false);

  console.log("Trip list >>>");
  console.log(TripData.defaultPlaces);
  console.log(props);

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponent headerProps={props} screenTitle="My Trips" />

      {/* <Text>List of Trips</Text> */}
      <ScrollView style={styles.scrollView}>
        {TripData.defaultPlaces.map((trips) => (
          <TripCard
            key={trips.tripName}
            tripName={trips.tripName}
            tripIcon={trips.image}
            tripTasks={trips.tasks}
            tripMembers={trips.members}
            isAdmin={trips.isAdmin}
            parentProps={props}
          />
        ))}
        {showNewTrip ? (
          <TripCard
            // key={trips.tripName}
            tripName="Paris"
            tripIcon="test"
            tripTasks=""
            tripMembers=""
            isAdmin={true}
            parentProps={props}
          />
        ) : null}
        {showParisTrip ? (
          <TripCard
            // key={trips.tripName}
            tripName="Paris"
            tripIcon="test"
            tripTasks=""
            tripMembers=""
            isAdmin={true}
            parentProps={props}
          />
        ) : null}
        <View style={styles.takeQuizCard}>
          <Text style={styles.takeQuizText}>
            Don't know where to go for your next trip? Take our quiz to find
            out!
          </Text>
          <TouchableHighlight style={styles.takeQuizButton}>
            <Text
              onPress={() => (
                props.navigation.navigate({
                  name: "QuizCoverScreen",
                  params: {},
                }),
                setShowParisTrip(false)
              )}
              style={styles.takeQuizButtonText}
            >
              Take Quiz
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View>
        <TouchableHighlight style={styles.newTripButton}>
          <Text
            onPress={() => (
              props.navigation.navigate({
                name: "NewTrips",
                params: { isAdmin: true, tripName: false },
              }),
              setShowNewTrip(true)
            )}
            style={styles.buttonText}
          >
            New Trip
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
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
  takeQuizButton: {
    margin: 15,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25,
  },
  takeQuizButtonText: {
    color: "#032224",
    // color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
//
