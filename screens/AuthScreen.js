import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function AuthScreen(props) {
  const [showLogin, setShowLogin] = React.useState(
    props.route.params.showLogin
  );

  console.log("Auth >>>>>>>>>>>>");

  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {showLogin ? "Sign In" : "Sign Up"}
        </Text>
      </View>
      {showLogin ? (
        <Login authScreenProps={props} setShowLogin={setShowLogin} />
      ) : (
        <SignUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
      {/* <Button title="Login" onPress={() => props.navigation.navigate("Home")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  header: {
    height: 175,
    backgroundColor: "#032224",
    color: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 100
  },
  headerText: {
    color: "#fff",
    fontSize: 35
  }
});
