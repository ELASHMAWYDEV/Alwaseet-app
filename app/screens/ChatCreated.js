import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import { Clipboard } from "react-native";

//Assets
import Colors from "../settings/Colors";

const ChatCreated = ({ navigation, route }) => {
  // const { chatNumber, userOne, userTwo, userOnePassword, userTwoPassword } = route.params;
  const [chatNumber, userOne, userTwo, userOnePassword, userTwoPassword] = [
    51795247,
    "Ahmed",
    "Mahmoud",
    "pass1",
    "pass2",
  ];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/img/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("../assets/img/round-checkmark.png")}
        style={styles.checkImage}
      />
      <Text style={styles.titleText}>تم انشاء المحادثة بنجاح</Text>
      <Text style={styles.subtitleText}>يرجي اتباع الخطوات التالية</Text>
      <Text style={styles.infoText}>
        1- قم بنسخ رقم المحادثة واسم المستخدم
        {`\n`}2- يقوم المستخدمين بتحميل التطبيق
        {`\n`}3- بعد فتح التطبيق ، يضع كل مستخدم رقم المحادثة بالإضافة الي اسم
        المستخدم الخاص به وكلمة مروره
        {`\n`}4- ثم الضغط علي بدء المحادثة
        {`\n`}5- ستكون المحادثة صالحة حتي {`15/10/2020 2:30 pm`}
      </Text>
      <View style={styles.infosContainer}>
        <Text style={styles.chatInfoTitle}>رقم المحادثة</Text>
        <View style={styles.chatInfoContainer}>
          <TouchableNativeFeedback
            onPress={() => Clipboard.setString(chatNumber)}
            useForeground
          >
            <View style={styles.infoCopyBtn}>
              <Text style={styles.infoCopyText}>نسخ</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.chatInfo}>
            <Text style={[styles.chatInfoText, { letterSpacing: 12 }]}>
              {chatNumber}
            </Text>
          </View>
        </View>
        <Text style={styles.chatInfoTitle}>اسم المستخدم الأول</Text>
        <View style={styles.chatInfoContainer}>
          <TouchableNativeFeedback
            onPress={() => Clipboard.setString(userOne)}
            useForeground
          >
            <View style={styles.infoCopyBtn}>
              <Text style={styles.infoCopyText}>نسخ</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.chatInfo}>
            <Text style={styles.chatInfoText}>{userOne}</Text>
          </View>
        </View>
        <Text style={styles.chatInfoTitle}>كلمة مرور المستخدم الأول</Text>
        <View style={styles.chatInfoContainer}>
          <TouchableNativeFeedback
            onPress={() => Clipboard.setString(userOnePassword)}
            useForeground
          >
            <View style={styles.infoCopyBtn}>
              <Text style={styles.infoCopyText}>نسخ</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.chatInfo}>
            <Text style={styles.chatInfoText}>{userOnePassword}</Text>
          </View>
        </View>
        <Text style={styles.chatInfoTitle}>اسم المستخدم الثاني</Text>
        <View style={styles.chatInfoContainer}>
          <TouchableNativeFeedback
            onPress={() => Clipboard.setString(userTwo)}
            useForeground
          >
            <View style={styles.infoCopyBtn}>
              <Text style={styles.infoCopyText}>نسخ</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.chatInfo}>
            <Text style={styles.chatInfoText}>{userTwo}</Text>
          </View>
        </View>
        <Text style={styles.chatInfoTitle}>كلمة مرور المستخدم الثاني</Text>
        <View style={styles.chatInfoContainer}>
          <TouchableNativeFeedback
            onPress={() => Clipboard.setString(userTwoPassword)}
            useForeground
          >
            <View style={styles.infoCopyBtn}>
              <Text style={styles.infoCopyText}>نسخ</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.chatInfo}>
            <Text style={styles.chatInfoText}>{userTwoPassword}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Home")}>
          <View style={styles.goHomeBtn}>
            <Text style={styles.btnText}>الذهاب الي الرئيسية</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  logoImage: {
    resizeMode: "contain",
    width: "50%",
    height: 80,
    marginTop: 30,
    alignSelf: "center",
  },
  checkImage: {
    resizeMode: "contain",
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
  },
  titleText: {
    fontFamily: "Almarai-Bold",
    fontSize: 32,
    color: Colors.white,
    textAlign: "center",
  },
  subtitleText: {
    fontFamily: "Almarai-Regular",
    fontSize: 26,
    color: Colors.white,
    textAlign: "center",
    marginTop: 40,
  },
  infoText: {
    fontFamily: "Almarai-Regular",
    fontSize: 16,
    color: Colors.white,
    textAlign: "right",
    marginVertical: 15,
    marginHorizontal: 20,
    lineHeight: 34,
  },
  infosContainer: {
    marginHorizontal: 20,
    marginVertical: 25,
  },
  chatInfoTitle: {
    fontFamily: "Almarai-Bold",
    fontSize: 22,
    color: Colors.white,
    textAlign: "center",
  },
  chatInfoContainer: {
    flexDirection: "row-reverse",
    borderRadius: 10,
    overflow: "hidden",
    height: 45,
    width: "100%",
    marginBottom: 30,
    marginTop: 15,
  },
  infoCopyBtn: {
    width: 80,
    backgroundColor: Colors.red,
    justifyContent: "center",
    alignItems: "center",
  },
  infoCopyText: {
    fontFamily: "Almarai-Regular",
    fontSize: 18,
    color: Colors.white,
  },
  chatInfo: {
    backgroundColor: Colors.lightYellow,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chatInfoText: {
    fontFamily: "Almarai-Bold",
    fontSize: 18,
    color: Colors.black,
  },
  bottomContainer: {
    marginTop: "auto",
  },
  goHomeBtn: {
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.green,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "Almarai-Regular",
    fontSize: 18,
    color: Colors.lightYellow,
  },
});

export default ChatCreated;
