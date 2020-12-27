import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";

export default function QuizCoverScreen(props) {
  const [quizName, setQuizName] = React.useState("Trip Location");

  // function continueButtonClicked() {
  //   props.navigation.navigate({
  //     name: "QuizContentScreen",
  //     params: { title: quizName },
  //   });

  //   setTimeout(function () {
  //     if (quizName == "Trip Location") {
  //       setQuizName("Hotel Type");
  //     } else if (quizName == "Hotel Type") {
  //       setQuizName("Budget");
  //     } else if (quizName == "Budget") {
  //       setQuizName("Role Planning");
  //     } else {
  //       setQuizName("Trip Location");
  //     }
  //   }, 500);
  // }

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle={quizName + " Quiz"}
      />

      <Text style={styles.title}>Trip Location Quiz</Text>

      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate({
            name: "QuizContentScreen",
            params: { title: quizName },
          })
        }
        style={styles.continueButton}
      >
        <Text style={styles.continue}>CONTINUE</Text>
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

  title: {
    marginVertical: "30%",
    height: 130,
    fontSize: 45,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  continue: {
    color: "white",
    textAlign: "center",
    paddingVertical: 15,
  },
  continueButton: {
    backgroundColor: "#032224",
    width: "90%",
    // marginHorizontal: 50,
  },
});
