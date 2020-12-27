import React, { Component, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from "react-native";
export default function MoreMemberModal(props) {
  console.log("__________________________________");

  console.log(props.members[0]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                color: "#032224",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 15
              }}
            >
              Members
            </Text>

            <View
              style={[
                styles.leftColumn,
                { flexDirection: "row", padding: 20, marginLeft: 10 }
              ]}
            >
              {props.members.map(imageURL => (
                <Image
                  style={styles.memberImage}
                  source={{
                    uri: imageURL
                  }}
                />
              ))}
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#032224" }}
              onPress={_toggleModal}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalView: {
    margin: 20,

    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30,
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 45,
    alignItems: "center",
    shadowColor: "#000",
    width: "80%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    marginTop: 20,
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 80
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  memberImage: {
    // flex: 1,
    height: 40,
    width: 40,

    borderRadius: 20,

    marginHorizontal: 5
  }
});
