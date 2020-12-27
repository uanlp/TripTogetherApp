import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";

export default function TaskConfirmation(props) {
  console.log("Trip Confirmation >>>>>>>>");

  console.log(props.route.params);

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Add Tasks"
      />
      <Text style={styles.title}>
        The following task will be added to your task list:
      </Text>
      <View style={styles.taskInfoContainer}>
        <View style={styles.taskInfo}>
          <Text style={styles.h1}>
            Task Name:
            <Text style={{ color: "#003300" }}>
              {" " + props.route.params.taskName}
            </Text>
          </Text>
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.h1}>
            Due date:{" "}
            <Text style={{ color: "#003300" }}>
              {props.route.params.date.getMonth() +
                1 +
                "/" +
                props.route.params.date.getDate() +
                "/" +
                props.route.params.date.getFullYear()}
            </Text>
          </Text>
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.h1}>
            Assigned to:
            <Text style={{ color: "#003300" }}>
              {" " + props.route.params.taskAssigned}
            </Text>
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={() =>
          props.navigation.navigate({
            name: "NewTrips",
            params: {
              taskName: props.route.params.taskName,
              date: props.route.params.date,
              taskAssigned: props.route.params.taskAssigned,
            },
          })
        }
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#032224",
    marginLeft: 20,
    marginBottom: 30,
  },
  h1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#032224",
  },
  taskInfo: {
    padding: 10,
  },
  taskInfoContainer: {
    padding: 30,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
