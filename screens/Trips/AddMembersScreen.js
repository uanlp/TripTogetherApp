import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";
import { Ionicons } from "@expo/vector-icons";

export default function AddMembersSreen(props) {
  const [search, setSearch] = React.useState("");
  const [showSearchResults, setShowSearchResults] = React.useState(false);

  useEffect(() => {
    if (
      search == "Romo" ||
      search == "Ro" ||
      search == "Rom" ||
      search == "R"
    ) {
      setShowSearchResults(true);
    } else setShowSearchResults(false);
  });

  const hideSearchResult = () => {
    setSearch("Romo Islam");

    setShowSearchResults(false);
    console.log("Test");
  };

  console.log(search);

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Add Member"
      />

      <View
        style={{
          flexDirection: "row",
          paddingLeft: 50,
          paddingRight: 50,
          // paddingBottom: 30,
          paddingTop: 15,
        }}
      >
        <View style={styles.leftComponent}>
          <Text>
            <Ionicons name="ios-search" size={20} color="#818181" />
          </Text>
        </View>
        <View style={styles.rightComponent}>
          {/* <Text>Search for Member</Text> */}
          <TextInput
            style={styles.searchBarInput}
            placeholder="Search User"
            placeholderTextColor="#818181"
            secureTextEntry={false}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>
      {showSearchResults ? (
        <View style={styles.searchResultContainer}>
          <View style={styles.searchResult}>
            <TouchableHighlight onPress={() => hideSearchResult()}>
              <Text>Romo Islam</Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : null}
      <Text style={[styles.font, { marginTop: 30 }]}>Or</Text>
      <TextInput
        style={styles.input}
        placeholder="Name:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Role:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Email:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      {search == "Romo Islam" ? (
        <TouchableHighlight
          onPress={() =>
            props.navigation.navigate({
              name: "NewTrips",
              params: {
                addedMember: search,
              },
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Member</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#d3d3d3" }]}
        >
          <Text style={styles.buttonText}>Add Member</Text>
        </TouchableHighlight>
      )}
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
  searchResultContainer: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    // width: "100%",
    paddingLeft: 10,
    paddingRight: 50,
    paddingBottom: 50,
    paddingTop: 10,
  },
  searchResult: {
    width: "70%",
  },
});
