import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

export default function SignUp(props) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");

  console.log(props.showLogin);
  console.log(">>>>>>");

  //   console.log(props.setShowLogin(true));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setUserName(text)}
        placeholder="Username or Email"
        placeholderTextColor="#032224"
        value={userName}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="#032224"
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPasswordConfirmation(text)}
        placeholder="Confirm Password"
        placeholderTextColor="#032224"
        value={passwordConfirmation}
        secureTextEntry={true}
      />
      <TouchableHighlight
        onPress={console.log("Button Pressed")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Text style={{ color: "#032224", fontWeight: "bold" }}>
          Already have an Account
        </Text>
      </View>
      <TouchableHighlight
        // onPress={loginButtonPressed()}
        onPress={() => props.setShowLogin(true)}
        style={styles.buttonAlt}
      >
        <Text style={styles.buttonTextAlt}>Sign In</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    margin: 10,
    height: 50,
    borderColor: "#032224",
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 20
  },
  button: {
    margin: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  buttonAlt: {
    margin: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#032224",
    borderWidth: 3,
    borderRadius: 25
  }
});
