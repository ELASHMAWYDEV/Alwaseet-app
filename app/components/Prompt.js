import React, { useState } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Modal,
  StyleSheet,
} from "react-native";

//Globals
import Colors from "../settings/Colors";

const Prompt = ({ isVisible, optOne, optTwo, title, message, onClose }) => {
  const [visible, setVisible] = useState(isVisible);

  const toggleModal = () => {
    setVisible(!visible);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={toggleModal}>
      <View style={styles.container}>
        <View style={styles.promptBox}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
          </View>

          <View style={styles.btnsContainer}>
            <TouchableNativeFeedback onPress={() => { optOne.value(); toggleModal() }} useForeground>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{optOne.label}</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => { optTwo.value(); toggleModal()}} useForeground>
              <View style={[styles.btnContainer, styles.btnContainerLeft]}>
                <Text style={[styles.btnText, styles.btnNo]}>{optTwo.label}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </Modal>
  );
};

Prompt.defaultProps = {
  isVisible: true,
  optOne: {
    label: "",
    value: () => null
  },
  optTwo: {
    label: "",
    value: () => null
  },
  title: "تأكيد",
  message: "هنا توضع الرسالة التي تظهر للمستخدم",
  onClose: () => null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  promptBox: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 10,
    marginHorizontal: 15,
  },
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontFamily: "Almarai-Regular",
    fontSize: 26,
    textAlign: "center",
  },
  messageContainer: {
    paddingHorizontal: 18,
    marginVertical: 20,
  },
  message: {
    fontFamily: "Almarai-Regular",
    fontSize: 16,
    color: Colors.black,
    lineHeight: 24
  },
  btnsContainer: {
    flexDirection: "row-reverse",
    flex: 1,
    maxHeight: 60,
    marginTop: "auto",
    borderTopColor: "#535c68",
    borderTopWidth: 0.5,
  },
  btnContainer: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainerLeft: {
    borderRightColor: "#535c68",
    borderRightWidth: 0.5,
  },
  okBtnContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    color: Colors.black
  },
  btnNo: {
    color: Colors.red,
  },
});

export default Prompt;
