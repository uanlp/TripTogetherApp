import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";
export default function QuizOverviewScreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
       you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle={"Plan a trip"}
      />

      <Text style={styles.title}>Plan a trip</Text>

      <View style={styles.bottomRow}>
        <TouchableHighlight
          onPress={() => console.log("user clicked LATER")}
          style={styles.laterButton}
        >
          <Text style={styles.later}>Later</Text>
        </TouchableHighlight>

        {/* <View style={{ marginHorizontal: 5 }}></View> */}

        <TouchableHighlight
          onPress={() => props.navigation.navigate("QuizCoverScreen")}
          style={styles.continueButton}
        >
          <Text style={styles.continue}>Sure</Text>
        </TouchableHighlight>
      </View>
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

  bottomRow: {
    flexDirection: "row",
    marginHorizontal: 20,
  },

  title: {
    height: 125,
    fontSize: 45,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  later: {
    color: "#032224",
    textAlign: "center",
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },

  laterButton: {
    width: "50%",
    borderColor: "#032224",
    borderWidth: 2,
  },

  continue: {
    color: "white",
    textAlign: "center",
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },

  continueButton: {
    backgroundColor: "#032224",
    width: "50%",
    // ma
  },
});
