import React, {useState} from 'react';
import { View, Text, Modal } from "react-native";



const Loading = (props) => {

  const [visible, setVisible] = useState(true);

  const closeLoading = () => {
    setVisible(false);
    props.closeLoading();
  }

  return (

    <Modal onRequestClose={closeLoading} visible={visible} animationType="fadeIn">
      
    </Modal>
  );
}

Loading.defaultProps = {
  closeLoading: () => null
}

export default Loading;