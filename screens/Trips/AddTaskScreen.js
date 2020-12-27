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
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "../../components/Datepicker";
import { Ionicons } from "@expo/vector-icons";

export default function AddTaskScreen(props) {
  const [taskName, setTaskName] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [taskAssigned, setTaskAssigned] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showDate, setShowDate] = useState(false);

  console.log(taskName);
  console.log(date);
  console.log(taskAssigned);

  useEffect(() => {
    if (modalVisible == true) {
      setShowDate(true);
    }
  });

  return (
    <View style={styles.container}>
      {modalVisible ? (
        <View
          style={{
            width: "100%",
            height: "120%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            zIndex: 1,
          }}
        />
      ) : null}
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Add Tasks"
      />
      <DatePicker
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        date={date}
        setDate={setDate}
      />

      <View
        style={{
          flexDirection: "row",
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 30,
          paddingTop: 15,
        }}
      ></View>

      <TextInput
        style={styles.input}
        placeholder="Task Name:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
        onChangeText={(text) => setTaskName(text)}
        value={taskName}
      />

      <TouchableHighlight
        style={styles.datePicker}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        {!showDate ? (
          <Text style={{ color: "#818181" }}>Choose Due Date</Text>
        ) : (
          <Text>
            {date.getMonth() +
              1 +
              "/" +
              date.getDate() +
              "/" +
              date.getFullYear()}
          </Text>
        )}
      </TouchableHighlight>
      <TextInput
        style={styles.input}
        placeholder="Assigned To:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
        onChangeText={(text) => setTaskAssigned(text)}
        value={taskAssigned}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() =>
          props.navigation.navigate({
            name: "TaskConfirmation",
            params: {
              taskName: taskName,
              date: date,
              taskAssigned: taskAssigned,
            },
          })
        }
      >
        <Text style={styles.buttonText}>Create Task</Text>
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
  font: {
    color: "#032224",
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    margin: 10,
    height: 50,
    width: 320,
    borderColor: "#B5B3B3",
    borderWidth: 1.5,
    borderRadius: 0,
    paddingLeft: 20,
  },
  searchBarInput: {
    borderColor: "#B5B3B3",
    // borderWidth: 1.5,
    borderRadius: 0,
    borderWidth: 0,
    // paddingLeft: 20
  },
  leftComponent: {
    // backgroundColor: "red",
    width: "10%",
    // paddingBottom: 5,
    // paddingLeft: 10,
    borderBottomColor: "#B5B3B3",
    borderBottomWidth: 1.5,
    // alignItems: "center"
  },
  rightComponent: {
    // backgroundColor: "blue",
    width: "90%",
    borderBottomColor: "#B5B3B3",
    borderBottomWidth: 1.5,
  },
  datePicker: {
    margin: 10,
    height: 50,
    width: 320,
    borderColor: "#B5B3B3",
    borderWidth: 1.5,
    borderRadius: 0,
    paddingLeft: 20,
    justifyContent: "center",
  },
});
