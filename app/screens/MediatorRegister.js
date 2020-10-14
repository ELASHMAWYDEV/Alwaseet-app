import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../assets/Colors";

const MediatorRegister = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkTerms, setCheckTerms] = useState(false);

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
      <Text style={styles.screenTitle}>حساب جديد</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputTitle}>الاسم بالكامل</Text>
        <TextInput
          placeholder="الاسم بالكامل"
          style={styles.input}
          onChangeText={setName}
        />
        <Text style={styles.inputTitle}>اسم المستخدم</Text>
        <TextInput
          placeholder="اسم المستخدم"
          style={styles.input}
          onChangeText={setName}
        />
        <Text style={styles.inputTitle}>البريد الالكتروني</Text>
        <TextInput
          placeholder="البريد الالكتروني"
          style={styles.input}
          onChangeText={setName}
        />

        <Text style={styles.inputTitle}>كلمة المرور</Text>
        <TextInput
          placeholder="كلمة المرور"
          style={styles.input}
          onChangeText={setPassword}
        />
        <Text style={styles.inputTitle}>تأكيد كلمة المرور</Text>
        <TextInput
          placeholder="تأكيد كلمة المرور"
          style={styles.input}
          onChangeText={setName}
        />
        <View style={styles.termsContainer}>
          <TouchableWithoutFeedback onPress={() => setCheckTerms(!checkTerms)}>
            {checkTerms ? (
              <Image
                source={require("../assets/img/checkmark.png")}
                style={styles.checkmarkImg}
              />
            ) : (
              <View style={styles.emptyCheckBox}></View>
            )}
          </TouchableWithoutFeedback>
          <Text style={styles.termsText}>
            أوافق علي جميع الشروط والأحكام ، وسياسة الخصوصية
          </Text>
        </View>
        <TouchableNativeFeedback onPress={() => navigation.navigate("SuccessRegister")}>
          <View style={styles.RegisterBtn}>
            <Text style={styles.RegisterText}>تسجيل</Text>
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
    marginTop: 50,
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
  RegisterBtn: {
    alignSelf: "center",
    backgroundColor: Colors.green,
    paddingHorizontal: 120,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 25,
    borderWidth: 1,
    borderColor: Colors.lightYellow,
    marginBottom: 100,
  },
  RegisterText: {
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    color: Colors.lightYellow,
  },
  termsContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 15,
  },
  emptyCheckBox: {
    width: 30,
    height: 30,
    backgroundColor: Colors.lightYellow,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.lightBlue
  },
  checkmarkImg: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  termsText: {
    color: Colors.lightYellow,
    fontFamily: "Almarai-Regular",
    fontSize: 14,
    marginRight: 15,
  },
});

export default MediatorRegister;
