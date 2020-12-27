import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TripHeader, NewTripHeader } from "../../components/ScreenHeader";
import MoreMemberButton from "../../components/MoreMemberButton";

export default function CurrentTripScreen(props) {
  console.log("NEW TRIP >>>>>>>>>>");
  console.log(props);

  const members = props.route.params.members
    ? Object.values(props.route.params.members)
    : [];
  const membersToShow = props.route.params.members ? members.slice(0, 3) : [];

  // console.log("Length: " + Object.values(props.route.params.members).length);

  // const imageList = Object.values(props.route.params.members);
  return (
    <View style={styles.screenContainer}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}

      <NewTripHeader
        headerProps={props}
        screenTitle={
          props.route.params.name
            ? props.route.params.name
            : props.route.params.tripName
            ? "Paris"
            : "Untitled"
        }
      />

      <ScrollView>
        {props.route.params.isAdmin ? (
          <View style={[styles.container, { backgroundColor: "#032224" }]}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              You are the Admin
            </Text>
          </View>
        ) : null}
        {/* Members */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Members</Text>
          <View style={styles.messageAndAddRow}>
            <View style={[styles.leftColumn, { flexDirection: "row" }]}>
              {props.route.params.members ? (
                membersToShow.map((imageURL) => (
                  <Image
                    key={imageURL}
                    style={styles.memberImage}
                    source={{
                      uri: imageURL,
                    }}
                  />
                ))
              ) : props.route.params.addedMember !== undefined ? null : (
                <Text>No Members yet</Text>
              )}

              {members.length > 3 ? (
                <MoreMemberButton members={members} />
              ) : props.route.params.addedMember !== undefined ? (
                <Image
                  style={styles.memberImage}
                  source={{
                    uri:
                      "https://canvas.umn.edu/images/thumbnails/8246831/aiRZVRrOT2FWAy3zM6hIEXjaVYLCnOEdw2EPUpSj",
                  }}
                />
              ) : null}
            </View>
            <View style={styles.rightColumn}>
              {props.route.params.isAdmin ? (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate({ name: "AddMember", params: {} })
                  }
                  style={styles.addTouchableOpacity}
                >
                  <Text style={styles.addButton}>+Add</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>

        {/* Tasks */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Tasks</Text>
          <View style={styles.messageAndAddRow}>
            <View style={styles.leftColumn}>
              {props.route.params.tasks ? (
                props.route.params.tasks.map((tasks) => (
                  <View style={{ flexDirection: "row" }}>
                    <Text>
                      {tasks.taskName + " "} Due: {tasks.taskDate}{" "}
                    </Text>
                    <MaterialIcons
                      name={
                        tasks.isDone ? "check-box" : "check-box-outline-blank"
                      }
                      size={16}
                      color="#003300"
                    />
                  </View>
                ))
              ) : props.route.params.taskName !== undefined ? null : (
                <Text>No tasks yet</Text>
              )}

              {props.route.params.taskName !== undefined ? (
                <View style={{ flexDirection: "row" }}>
                  <Text>
                    {props.route.params.taskName + " "} Due:{" "}
                    {props.route.params.date.getMonth() +
                      1 +
                      "/" +
                      props.route.params.date.getDate() +
                      "/" +
                      props.route.params.date.getFullYear()}{" "}
                  </Text>
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={16}
                    color="#003300"
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.rightColumn}>
              {props.route.params.isAdmin ? (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate({ name: "AddTask", params: {} })
                  }
                  style={styles.addTouchableOpacity}
                >
                  <Text style={styles.addButton}>+Add</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Progress</Text>
          {props.route.params.tasks ? (
            <View style={styles.progressBarBase}>
              <View
                style={[
                  styles.progress,
                  ,
                  { width: (1 / props.route.params.tasks.length) * 100 + "%" },
                ]}
              />
            </View>
          ) : (
            <Text style={styles.message}>No progresses made yet.</Text>
          )}
        </View>

        {/* Schedule */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Trip Schedule</Text>
          <View style={styles.messageAndAddRow}>
            <View style={styles.leftColumn}>
              <Text>Monday:</Text>
              <Text>Tuesday:</Text>
              <Text>Wednesday:</Text>
              <Text>Thursday:</Text>
              <Text>Friday:</Text>
              <Text>Saturday:</Text>
              <Text>Sunday:</Text>
            </View>
            <View style={styles.rightColumn}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate({
                    name: "TripTimeline",
                    params: {
                      tasks: props.route.params.tasks,
                    },
                  })
                }
                style={styles.expandTouchableOpacity}
              >
                <Text style={styles.addButton}>Expand Schedule</Text>
                {/* <Ionicons name="ios-expand" size={16} color="#fff" /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  container: {
    marginTop: 15,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 15,
    paddingTop: 20,
    paddingLeft: 20,
    shadowColor: "#C0C0C0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },

  boldHeader: {
    fontWeight: "bold",
  },

  messageAndAddRow: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center"
  },

  rightColumn: {
    // backgroundColor: "red",
    width: "30%",
    marginTop: 20,
  },
  leftColumn: {
    // backgroundColor: "blue",
    width: "70%",
    marginTop: 20,
    // flexDirection: "row"
  },

  message: {
    // flex: 13,
    // flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 10,
  },

  addTouchableOpacity: {
    // flex: 3,
    backgroundColor: "#032224",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    borderRadius: 50,
    // paddingVertical: 5,
    // paddingHorizontal: 0
  },

  addButton: {
    color: "white",
    textAlign: "center",
  },

  squareButton: {
    width: 80,
    height: 80,
    marginVertical: 2,
    marginHorizontal: 5,
    backgroundColor: "#032224",
    alignItems: "center",
    justifyContent: "center",
  },

  expandTouchableOpacity: {
    width: "80%",
    height: 90,
    backgroundColor: "#032224",
    marginHorizontal: 15,
    paddingVertical: 28,
    paddingHorizontal: 0,
  },

  memberImage: {
    // flex: 1,
    height: 40,
    width: 40,

    borderRadius: 20,

    marginHorizontal: 10,
  },
  moreMembers: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#032224",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  progressBarBase: {
    marginTop: 20,
    width: "100%",
    height: 10,
    backgroundColor: "#D3D3D3",
  },
  progress: {
    height: 10,
    backgroundColor: "#032224",
  },
});
