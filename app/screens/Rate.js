import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../settings/Colors";

//Components
import Rating from "../components/Rating";
import Prompt from "../components/Prompt";

const Rate = ({ navigation }) => {
  const [rating, setRating] = useState(0);
  const [thanksPrompt, showThanksPrompt] = useState(false);

  return (
    <View style={styles.container}>
      {thanksPrompt && (
        <Prompt
          title="شكرًا"
          message={
            "نحن نشكرك علي وقتك ، ونتمني أن يكون اقتراحك مفيدا في التحديثات القادمة،لا تنس أن تقييمك لنا علي متجر بلاي سيساعدنا علي الاستمرار في تقديم خدماتنا مجانا"
          }
          optOne={{ label: "الرجوع", value: () => navigation.navigate("Chat") }}
          optTwo={{ label: "Google Play", value: () => null }}

          onClose={() => showThanksPrompt(false)}
        />
      )}
      <TouchableNativeFeedback
        onPress={() => navigation.goBack()}
        useForeground
      >
        <View style={styles.closeContainer}>
          <Icon name="ios-close" size={42} color={Colors.white} />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.title}>ما رأيك في تطبيق الوسيط ؟</Text>
      <Rating onChange={setRating} />
      <Text style={[styles.title, { marginTop: 60 }]}>
        هل لديك أي مقترحات لتحسين التطبيق ؟
      </Text>
      <TextInput style={styles.input} placeholder="اكتب مقترحاتك هنا..." />
      <View style={styles.bottomContainer}>
        <TouchableNativeFeedback onPress={() => showThanksPrompt(true)}>
          <View style={styles.goHomeBtn}>
            <Text style={styles.btnText}>ارسال</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: StatusBar.currentHeight,
  },
  closeContainer: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    marginRight: 10,
  },
  title: {
    fontFamily: "Almarai-Bold",
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    lineHeight: 37,
    marginVertical: 20,
  },
  input: {
    backgroundColor: Colors.lightBlue,
    marginHorizontal: 20,
    borderRadius: 8,
    height: 200,
    textAlignVertical: "top",
    fontFamily: "Almarai-Regular",
    padding: 18,
    fontSize: 16,
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

export default Rate;
