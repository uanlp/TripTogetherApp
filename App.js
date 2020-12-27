import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

import StackNav from "./navigation/StackNav";

function App(props) {
  console.log("App.js props >>>>>");

  console.log(props);

  return <StackNav />;
}

export default App;
