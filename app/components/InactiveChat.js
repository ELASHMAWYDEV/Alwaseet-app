import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableHighlight } from "react-native";

//Assets
import Colors from "../settings/Colors";

//Helpers
import getRemainingTime from "../helpers/getRemainingTime";

const InactiveChat = ({ chat }) => {
  const [expDate, setExpDate] = useState(getRemainingTime(chat.expDate));

  useEffect(() => {
    setInterval(() => setExpDate(getRemainingTime(chat.expDate)), 1000);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => alert("Hello")}>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>2</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.title}>{chat.title}</Text>
      <Text style={styles.label} selectable>
        رقم المحادثة:{" "}
        <Text style={[styles.labelValue, { letterSpacing: 5 }]}>
          {chat.chatNumber}
        </Text>
      </Text>
      <Text style={styles.label}>
        متبقي: <Text style={styles.labelValue}>{expDate}</Text>
      </Text>
      <View style={styles.usersLabels}>
        <Text style={styles.label} selectable>
          المستخدم الأول:{" "}
          <Text style={styles.labelValue} selectable>
            {chat.firstUsername}
          </Text>
        </Text>
        <Text style={styles.label} selectable>
          المستخدم الثاني:{" "}
          <Text style={styles.labelValue} selectable>
            {chat.secondUsername}
          </Text>
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableNativeFeedback onPress={() => null} useForeground>
          <View style={styles.btn}>
            <Text style={styles.btnText}>دخول</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => null} useForeground>
          <View style={[styles.btn, { backgroundColor: Colors.red }]}>
            <Text style={styles.btnText}>انهاءالمحادثة</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  notificationText: {
    color: Colors.white,
    fontFamily: "Almarai-Bold",
    fontSize: 18,
  },
  title: {
    fontFamily: "Almarai-Bold",
    fontSize: 18,
    color: Colors.white,
    paddingLeft: 25,
    marginVertical: 3,
  },
  label: {
    fontFamily: "Almarai-Regular",
    fontSize: 15,
    textAlign: "right",
    color: Colors.white,
    marginVertical: 5,
  },
  labelValue: {
    color: Colors.lightBlue,
  },
  usersLabels: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  bottomContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 5,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green,
    width: 140,
    paddingVertical: 7,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.lightYellow,
    overflow: "hidden",
  },
  btnText: {
    fontFamily: "Almarai-Regular",
    fontSize: 16,
    color: Colors.white,
  },
});

export default InactiveChat;
