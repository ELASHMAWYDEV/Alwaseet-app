import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
} from "react-native";

//Assets
import Colors from "../assets/Colors";

const SuccessRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("../assets/img/round-checkmark.png")}
        style={styles.checkImage}
      />
      <Text style={styles.titleText}>تم التسجيل بنجاح</Text>
      <Text style={styles.infoText}>
        تهانينا ، لقد أصبحت الأن وسيط يمكنك انشاء أي عدد تريده من المحادثات
        الخدمة التي نقدمها مجانية تماما
      </Text>
      <View style={styles.bottomContainer}>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Home")}>
          <View style={styles.goHomeBtn}><Text style={styles.btnText}>الذهاب الي الرئيسية</Text></View>
        </TouchableNativeFeedback>
      </View>
    </View>
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
    marginTop: 80,
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
    textAlign: "center"
  },
  infoText: {
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    color: Colors.white,
    textAlign: "center",
    marginTop: 30,
    marginHorizontal: 20,
    lineHeight: 34,
    
  },
  bottomContainer: {
    marginTop: "auto"
  },
  goHomeBtn: {
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.green,
    borderRadius: 10
  },
  btnText: {
    fontFamily: "Almarai-Regular",
    fontSize: 18,
    color: Colors.lightYellow,
  },
});

export default SuccessRegister;
