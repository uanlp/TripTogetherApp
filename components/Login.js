import React from "react";
import {
  TextInput,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight
} from "react-native";

export default function Login(props) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

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

      <TouchableHighlight
        onPress={() => props.authScreenProps.navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Text style={{ color: "#032224", fontWeight: "bold" }}>
          Don't have an Account
        </Text>
      </View>
      <TouchableHighlight
        // onPress={loginButtonPressed()}
        onPress={() => props.setShowLogin(false)}
        style={styles.buttonAlt}
      >
        <Text style={styles.buttonTextAlt}>Sign Up</Text>
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
  },
  buttonTextAlt: {
    color: "#032224",
    fontWeight: "bold"
  }
});
