import React, { useState } from "react";
import { View, Text, Modal, ActivityIndicator } from "react-native";

//Assets
import Colors from "../settings/Colors";

const Loading = (props) => {
  const [visible, setVisible] = useState(true);

  const closeLoading = () => {
    setVisible(false);
    props.closeLoading();
  };

  return (
    <Modal
      onRequestClose={closeLoading}
      visible={visible}
      animationType="fadeIn"
      transparent={true}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.95)"
        }}
      >
        <ActivityIndicator color={Colors.green} size={80} />
      </View>
    </Modal>
  );
};

Loading.defaultProps = {
  closeLoading: () => null,
};

export default Loading;
