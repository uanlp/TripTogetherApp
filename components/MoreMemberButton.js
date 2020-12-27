import React, { Component, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from "react-native";
import MoreMemberModal from "./MoreMemberModal";
export default function MoreMemberButton(props) {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(props.members);

  _toggleModal = () => {
    console.log("toggled>>>>>>>>");

    if (modalVisible == false) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View>
      <MoreMemberModal
        members={props.members}
        modalVisible={modalVisible}
        toggleModal={_toggleModal}
      />
      <TouchableOpacity
        onPress={() => _toggleModal()}
        style={styles.moreMembers}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>...</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  moreMembers: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#032224",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
