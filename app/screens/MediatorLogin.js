import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import Icon from "react-native-ionicons";
import * as SecureStore from "expo-secure-store";


//Assets
import Colors from "../settings/Colors";

//Context
import { useLogin } from "../helpers/AuthContext";

const MediatorLogin = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();


  useEffect(() => {
    retreiveUserAccess();
  }, []);
  const retreiveUserAccess = async () => {
    try {
      setUser(await SecureStore.getItemAsync("user-login"));
      setPassword(await SecureStore.getItemAsync("user-password"));
    } catch (e) {
      alert(e.message);
    }
  };

  //Store chat credentials on storage ===> for fast login
  useEffect(() => {
    storeUserAccess();
  }, [user, password]);

  const storeUserAccess = async () => {
    try {
      await SecureStore.setItemAsync("user-login", user);
      await SecureStore.setItemAsync("user-password", password);
    } catch (e) {
      alert(e.message);
    }
  };


  return (
    <ScrollView style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <View style={styles.topBackIconContainer}>
          <Icon
            name="ios-arrow-round-forward"
            size={44}
            color={Colors.lightYellow}
          />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.screenTitle}>تسجيل الدخول</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputTitle}>اسم المستخدم أو البريد الالكتروني</Text>
        <TextInput
          placeholder="اسم المستخدم أو البريد الالكتروني"
          style={styles.input}
          onChangeText={setUser}
          value={user}
        />
        <Text style={styles.inputTitle}>كلمة المرور</Text>
        <TextInput
          placeholder="كلمة المرور"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableNativeFeedback onPress={() => login(user, password)}>
          <View style={styles.LoginBtn}>
            <Text style={styles.LoginText}>تسجيل الدخول</Text>
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
    paddingTop: StatusBar.currentHeight,
  },
  topBackIconContainer: {
    alignSelf: "flex-end",
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: Colors.red,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  screenTitle: {
    fontFamily: "Almarai-ExtraBold",
    fontSize: 34,
    textAlign: "center",
    color: Colors.lightYellow,
  },
  inputsContainer: {
    paddingHorizontal: 15,
    marginTop: 100,
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
  LoginBtn: {
    alignSelf: "center",
    backgroundColor: Colors.green,
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 25,
    borderWidth: 1,
    borderColor: Colors.lightYellow,
  },
  LoginText: {
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    color: Colors.lightYellow,
  },
});

export default MediatorLogin;
