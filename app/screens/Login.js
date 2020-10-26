import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import * as SecureStore from "expo-secure-store";

//Assets
import Colors from "../settings/Colors";

//Helpers
import { useChatLogin } from "../helpers/AuthContext";

const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [chatNumber, setChatNumber] = useState("");
  const login = useChatLogin();

  useEffect(() => {
    retreiveChatAccess();
  }, []);
  const retreiveChatAccess = async () => {
    try {
      setChatNumber(await SecureStore.getItemAsync("chat-number"));
      setPassword(await SecureStore.getItemAsync("chat-password"));
      console.log(await SecureStore.getItemAsync("chat-password"));
    } catch (e) {
      alert(e.message);
    }
  };

  //Store chat credentials on storage ===> for fast login
  useEffect(() => {
    storeChatAccess();
  }, [chatNumber, password]);

  const storeChatAccess = async () => {
    try {
      await SecureStore.setItemAsync("chat-number", chatNumber);
      await SecureStore.setItemAsync("chat-password", password);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require("../assets/img/logo.png")}
      />
      <View style={styles.inputsContainer}>
        <Text style={styles.inputTitle}>رقم المحادثة المؤقتة</Text>
        <TextInput
          placeholder="رقم المحادثة المؤقتة"
          style={styles.input}
          onChangeText={setChatNumber}
          value={chatNumber}
        />
        <Text style={styles.inputTitle}>كلمة المرور المؤقتة</Text>
        <TextInput
          placeholder="كلمة المرور المؤقتة"
          style={[styles.input, { textAlign: "right" }]}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <TouchableNativeFeedback onPress={() => login(chatNumber, password)}>
          <View style={styles.startChatBtn}>
            <Text style={styles.startChatText}>بدء المحادثة</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.noticeText}>هل انت وسيط ؟</Text>
        <View style={styles.authBtnsContainer}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("MediatorLogin")}
          >
            <View style={styles.signInBtn}>
              <Text style={styles.authBtnText}>تسجيل الدخول</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("MediatorRegister")}
          >
            <View style={styles.registerBtn}>
              <Text style={styles.authBtnText}>حساب جديد</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
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
    width: "70%",
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 30,
  },
  inputsContainer: {
    paddingHorizontal: 15,
    marginTop: 30,
  },
  inputTitle: {
    color: Colors.white,
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.lightYellow,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    fontFamily: "Almarai-Regular",
  },
  startChatBtn: {
    alignSelf: "center",
    backgroundColor: Colors.green,
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.lightYellow,
  },
  startChatText: {
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    color: Colors.lightYellow,
  },
  bottomContainer: {
    marginTop: 80,
    paddingHorizontal: 15,
  },
  noticeText: {
    fontFamily: "Almarai-Regular",
    fontSize: 18,
    color: Colors.white,
    marginBottom: 25,
    alignSelf: "center",
  },
  authBtnsContainer: {
    flexDirection: "row-reverse",
    marginBottom: 30,
    justifyContent: "space-between",
  },
  signInBtn: {
    backgroundColor: Colors.green,
    paddingVertical: 5,
    borderRadius: 30,
    width: "47%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.lightYellow,
  },
  registerBtn: {
    backgroundColor: Colors.red,
    paddingVertical: 5,
    borderRadius: 30,
    width: "47%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.lightYellow,
  },
  authBtnText: {
    fontFamily: "Almarai-Regular",
    fontSize: 18,
    color: Colors.lightYellow,
  },
});

export default Login;
