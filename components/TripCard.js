import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
export default function TripCard(props) {
  console.log("Trip Card");

  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {props.tripIcon == "test" ? (
          <View style={[styles.tripIcon, { backgroundColor: "#032224" }]} />
        ) : (
          <Image
            style={styles.tripIcon}
            source={{
              uri: props.tripIcon,
            }}
          />
        )}
      </View>
      <View style={styles.middleSection}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {props.tripName}
        </Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableHighlight
          onPress={() =>
            props.parentProps.navigation.navigate({
              name: "NewTrips",
              params: {
                name: props.tripName,
                members: props.tripMembers,
                tasks: props.tripTasks,
                isAdmin: props.isAdmin,
              },
            })
          }
          style={styles.editButton}
        >
          {props.isAdmin ? (
            <Text style={styles.buttonText}>Edit</Text>
          ) : (
            <Text style={styles.buttonText}>View</Text>
          )}
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  middleSection: {
    width: "50%",
    height: 60,
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  rightSection: {
    width: "25%",
    height: 60,
    // backgroundColor: "powderblue",
    alignItems: "center",
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
  editButton: {
    margin: 10,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 35,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tripIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
