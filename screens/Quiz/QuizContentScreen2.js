import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from "react-native";

import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";
import RadioForm from "react-native-simple-radio-button";

export default function QuizContentScreen2(props) {
  const [newOptionMessage, setNewOptionMessage] = React.useState("");

  var userOptions = [],
    userOptionTypes;

  var title =
    typeof props.route.params == "undefined"
      ? "Trip Location"
      : props.route.params.title;

  if (title === "Trip Location") {
    userOptionTypes = ["North America", "Central America", "Asia", "Europe"];
  } else if (title === "Hotel Type") {
    userOptionTypes = [
      "AirBnb",
      "Motel",
      "Hotel",
      "Hostels",
      "Rent a room",
      "Housesit",
      "Couchsurf",
      "Camp",
    ];
  } else if (title === "Budget") {
    userOptionTypes = ["$500", "$750", "$1000", "$1250", "$1500"];
  } else {
    userOptionTypes = ["admin", "planning", "flight booking"];
  }

  for (let i = 0; i < userOptionTypes.length; i++) {
    userOptions.push({ label: <Text>{userOptionTypes[i]}</Text> });
  }

  const [options, setOptions] = React.useState(userOptions);

  function continueBtnClicked() {
    props.navigation.navigate({
      name: "QuizContentScreen3",
      params: { title: "Budget" },
    });
  }

  function addNewField() {
    if (newOptionMessage !== "") {
      setOptions([
        ...options,
        {
          label: <Text>{newOptionMessage}</Text>,
          value: "test1",
        },
      ]);
      setNewOptionMessage("");
    }
  }

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle={title + " Question"}
      />

      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.content}>
        <RadioForm
          radio_props={options}
          buttonColor={"#032224"}
          onPress={() => console.log(2)}
          labelStyle={{ fontSize: 20, color: "#032224" }}
          buttonSize={13}
          buttonOuterSize={30}
        />
      </ScrollView>

      <View style={styles.optionView}>
        <TextInput
          style={styles.input}
          placeholder="Add new option"
          placeholderTextColor="#818181"
          secureTextEntry={false}
          value={newOptionMessage}
          onChangeText={(text) => setNewOptionMessage(text)}
        />

        <View style={{ paddingHorizontal: "1%" }}></View>

        <TouchableHighlight
          onPress={() => addNewField()}
          style={[styles.continueButton, styles.addButton]}
        >
          <Text style={styles.continue}>+ Add</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        onPress={() => continueBtnClicked()}
        style={[styles.continueButton, { marginBottom: "-4.5%" }]}
      >
        <Text style={styles.continue}>SAVE & CONTINUE</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    // flex: 1,
    height: 650,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  content: {
    width: "60%",
    marginTop: "10%",
    alignSelf: "center",
    // alignItems: 'baseline'
    marginBottom: 100,
  },

  title: {
    fontSize: 37,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  optionView: {
    flexDirection: "row",
    marginHorizontal: 21,
  },

  continue: {
    color: "white",
    textAlign: "center",
    paddingVertical: 15,
  },

  continueButton: {
    backgroundColor: "#032224",
    width: "90%",
    marginTop: "5%",
  },

  addButton: {
    width: "25%",
    marginTop: 0,
  },
  input: {
    height: 50,
    paddingLeft: 15,
    bottom: 0,
    width: "73%",
    borderColor: "#B5B3B3",
    borderWidth: 1,
    borderRadius: 5,
  },
});
