import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView
} from "react-native";

//Assets
import Colors from "../settings/Colors";

const Picker = ({ values, onClose, firstTitle, onSelect }) => {
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    onClose();
    setVisible(false);
  };


  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}
    >
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text style={styles.firstTitle}>{firstTitle && firstTitle}</Text>
          {values.map((option, i) => (
            <TouchableNativeFeedback onPress={() => { onSelect(option); closeModal()}} key={i}>
              <View style={styles.option}>
                <Text style={styles.optionText}>{option.label}</Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

Picker.defaultProps = {
  onClose: () => null,
  onSelect: () => null,
  values: [],
  firstTitle: ""
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 150
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: "auto",
    minHeight: 200,
    width: "100%",
    backgroundColor: Colors.lightBlue,
  },
  option: {
    padding: 12,
  },
  optionText: {
    color: Colors.black,
    textAlign: "center",
    fontFamily: "Almarai-Bold",
    fontSize: 18
  },
  firstTitle: {
    color: Colors.black,
    textAlign: "center",
    fontFamily: "Almarai-Bold",
    fontSize: 18,
    padding: 16
  },
});

export default Picker;

/* 
values = [
  {
    label: "1",
    value: 60
  }
]
*/
