import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

//Assets
import Colors from "../settings/Colors";

const EditChat = ({ onClose, chatTitle }) => {
  const toggleModal = () => {
    onClose();
  };

  return (
    <Modal animationType="fade" onRequestClose={toggleModal} transparent={true}>
      <View style={styles.container}>
        <View style={styles.editBox}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>عنوان المحادثة</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

EditChat.defaultProps = {
  onClose: () => null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  editBox: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 10,
    marginHorizontal: 15,
    minWidth: "90%"
  },
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontFamily: "Almarai-Bold",
    fontSize: 26,
    textAlign: "center",
  },
});

export default EditChat;
