import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-ionicons";
import { Audio } from 'expo-av';

//Assets
import Colors from "../settings/Colors";

//Helpers
import formatTime from "../helpers/formatTime";
import { useLogout } from "../helpers/AuthContext";


const Chat = ({ navigation }) => {
  const chatContainer = useRef();
  const chatInputRef = useRef();

  const logout = useLogout();

  const [chatInput, setChatInput] = useState("");
  const [userId, setUserId] = useState("");
  const [secondUserId, setSecondUserId] = useState(2);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 564998914,
      fromId: 2,
      toId: 1,
      type: "text",
      date: 1603207157791,
      msg: "مرحبا بك صديقي",
      status: "sent",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 2,
      toId: 1,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
    {
      id: 564998914,
      fromId: 1,
      toId: 2,
      type: "text",
      date: 1603207157791,
      msg: "بخير الحمد لله",
      status: "read",
    },
  ]);

  useEffect(() => {
    setUserId(1); //Set the logged in user id ==> from storage

    chatContainer.current.scrollToEnd({ animated: false });
  }, []);

  const sendMsg = async () => {
    
    if (chatInput.trim() == "") return alert("لا يمكنك ارسال رسالة فارغة");

    //add the message to state
    let msg = {
      id: Math.floor(Math.random(1)), //Temporary
      fromId: userId,
      toId: secondUserId,
      type: "text",
      date: new Date().getTime(),
      msg: chatInput,
      status: "sent",
    };
    setChatMessages([...chatMessages, msg]);

    //clear the input
    setChatInput("");
    chatInputRef.current.clear();

    //Scroll to bottom
    chatContainer.current.scrollToEnd();

    //play sound
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../assets/sound/message-sent.mp3'));
      await soundObject.playAsync();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Rate")}>
          <Image
            source={require("../assets/img/star.png")}
            style={styles.starImage}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/img/logo.png")}
          style={styles.logoImage}
        />
        <TouchableOpacity onPress={logout}>
          <Image
            source={require("../assets/img/logout.png")}
            style={styles.logoutImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.afterHeader}>
        <Text style={styles.headerSubtext}>
          انت الأن تتحدث الي: <Text style={styles.headerSubvalue}>Ahmed</Text>
        </Text>
        <Text style={styles.headerSubtext}>
          الحالة:{" "}
          <Text style={[styles.headerSubvalue, { color: Colors.green }]}>
            متصل
          </Text>
        </Text>
      </View>
      <ScrollView
        style={styles.chatContainer}
        ref={chatContainer}
      >
        {chatMessages.map((chat, i) => (
          <View
            key={i}
            style={[
              styles.chatBox,
              chat.fromId != userId && {
                flexDirection: "row",
              },
            ]}
          >
            <View
              style={[
                styles.chatTriangle,
                chat.fromId != userId && {
                  borderBottomColor: Colors.black,
                  transform: [{ rotate: "65deg" }],
                  left: 15,
                },
              ]}
            ></View>
            <Text
              style={[
                styles.chatText,
                chat.fromId != userId && {
                  backgroundColor: Colors.black,
                },
              ]}
            >
              {chat.msg}
            </Text>
            <Text
              style={[
                styles.chatTime,
                chat.fromId != userId && {
                  left: 20,
                },
              ]}
            >
              {formatTime(chat.date)}
            </Text>
            <Icon
              name={chat.status === "read" ? "ios-done-all" : "ios-checkmark"}
              size={20}
              color={Colors.green}
              style={[
                styles.readIcon,
                chat.fromId != userId && {
                  left: 2,
                },
              ]}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableNativeFeedback onPress={sendMsg} useForeground>
          <View style={styles.sendBtn}>
            <Icon
              name="send"
              size={30}
              color={Colors.white}
              style={styles.sendIcon}
            />
          </View>
        </TouchableNativeFeedback>
        <TextInput
          style={styles.chatInput}
          placeholder="اكتب هنا..."
          onChangeText={setChatInput}
          ref={chatInputRef}
          onSubmitEditing={sendMsg}
          blurOnSubmit={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.black,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
    paddingBottom: 10,
  },
  starImage: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  logoImage: {
    resizeMode: "contain",
    width: 150,
    height: 50,
  },
  logoutImage: {
    resizeMode: "contain",
    width: 35,
    height: 35,
  },
  afterHeader: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.lightYellow,
    elevation: 8,
    padding: 10,
    paddingHorizontal: 30,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  headerSubtext: {
    fontFamily: "Almarai-Regular",
    fontSize: 16,
    color: Colors.lightBlue,
  },
  headerSubvalue: {
    color: Colors.black,
    fontFamily: "Almarai-Bold",
  },
  chatContainer: {
    flex: 1,
    paddingBottom: 50
  },
  chatBox: {
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
    marginVertical: 5,
    marginBottom: 25,
  },
  chatText: {
    fontSize: 16,
    fontFamily: "Almarai-Regular",
    color: Colors.white,
    backgroundColor: Colors.green,
    padding: 10,
    paddingHorizontal: 18,
    marginHorizontal: 20,
    borderRadius: 8,
    lineHeight: 24,
  },
  chatTriangle: {
    position: "absolute",
    top: 0,
    left: 15,
    borderWidth: 15,
    borderColor: "transparent",
    borderBottomColor: Colors.green,
    transform: [{ rotate: "-65deg" }],
  },
  chatTime: {
    position: "absolute",
    bottom: -16,
    marginEnd: 20,
    color: Colors.lightBlue,
    fontSize: 12,
  },
  readIcon: {
    position: "absolute",
    bottom: -5,
    width: 20,
    height: 20,
    textAlign: "center",
  },
  bottomContainer: {
    flexDirection: "row-reverse",
    backgroundColor: Colors.black,
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  sendBtn: {
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    left: 2,
  },
  chatInput: {
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 15,
    marginHorizontal: 10,
    fontFamily: "Almarai-Regular",
    paddingHorizontal: 15,
    fontSize: 16,
    height: 40,
  },
});

export default Chat;
