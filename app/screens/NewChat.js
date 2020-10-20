import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../settings/Colors";

//Components
import Picker from "../components/Picker";

const { width } = Dimensions.get("window");

const NewChat = ({ navigation }) => {
  //Get the objects
  const [daysObj, hoursObj, minutesObj] = createObjects();

  //Show / Hide pickers
  const [daysPicker, showDaysPicker] = useState(false);
  const [hoursPicker, showHoursPicker] = useState(false);
  const [minutesPicker, showMinutesPicker] = useState(false);

  //Time
  const [days, setDays] = useState(daysObj[0]);
  const [hours, setHours] = useState(hoursObj[0]);
  const [minutes, setMinutes] = useState(minutesObj[0]);

  //Total time
  const [totalTime, setTotalTime] = useState(
    days.value + hours.value + minutes.value
  );

  //Inputs
  const [chatTitle, setChatTitle] = useState("");
  const [userOne, setUserOne] = useState("");
  const [userTwo, setUserTwo] = useState("");

  useEffect(() => {
    setTotalTime(days.value + hours.value + minutes.value);
  }, [days, hours, minutes]);

  return (
    <ScrollView style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => navigation.goBack()}
        useForeground
      >
        <View style={styles.closeContainer}>
          <Icon name="ios-close" size={42} color={Colors.white} />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.pageTitle}>انشاء محادثة جديدة</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputTitle}>عنوان المحادثة</Text>
        <TextInput
          placeholder="عنوان المحادثة"
          style={styles.input}
          onChangeText={() => null}
        />
        <Text style={styles.inputTitle}>اسم المستخدم الأول</Text>
        <TextInput
          placeholder="اسم المستخدم الأول"
          style={styles.input}
          onChangeText={() => null}
        />
        <Text style={styles.inputTitle}>اسم المستخدم الثاني</Text>
        <TextInput
          placeholder="اسم المستخدم الثاني"
          style={styles.input}
          onChangeText={() => null}
        />
        <Text style={styles.inputTitle}>صالحة لمدة</Text>
        <View style={styles.pickersContainer}>
          <TouchableNativeFeedback
            onPress={() => showDaysPicker(true)}
            useForeground
          >
            <View style={styles.pickerBtn}>
              <Icon
                name="ios-arrow-down"
                size={24}
                color={Colors.lightYellow}
                style={styles.pickerArrow}
              />
              <Text style={styles.pickerText}>{days.label} يوم</Text>
              {daysPicker && (
                <Picker
                  onClose={() => showDaysPicker(false)}
                  values={daysObj}
                  firstTitle="اختر عدد الأيام"
                  onSelect={setDays}
                />
              )}
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => showHoursPicker(true)}
            useForeground
          >
            <View style={styles.pickerBtn}>
              <Icon
                name="ios-arrow-down"
                size={24}
                color={Colors.lightYellow}
                style={styles.pickerArrow}
              />
              <Text style={styles.pickerText}>{hours.label} ساعة</Text>
              {hoursPicker && (
                <Picker
                  onClose={() => showHoursPicker(false)}
                  values={hoursObj}
                  firstTitle="اختر عدد الساعات"
                  onSelect={setHours}
                />
              )}
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => showMinutesPicker(true)}
            useForeground
          >
            <View style={styles.pickerBtn}>
              <Icon
                name="ios-arrow-down"
                size={24}
                color={Colors.lightYellow}
                style={styles.pickerArrow}
              />
              <Text style={styles.pickerText}>{minutes.label} دقيقة</Text>
              {minutesPicker && (
                <Picker
                  onClose={() => showMinutesPicker(false)}
                  values={minutesObj}
                  firstTitle="اختر عدد الدقائق"
                  onSelect={setMinutes}
                />
              )}
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <TouchableNativeFeedback onPress={() => null} useForeground>
        <View style={styles.createChatBtn}>
          <Text style={styles.createChatText}>انشاء المحادثة</Text>
        </View>
      </TouchableNativeFeedback>
    </ScrollView>
  );
};

//Create the days, hours, miutes Objects
const createObjects = () => {
  //days
  let days = [];
  for (let i = 0; i <= 30; i++) {
    days.push({ label: i, value: i * 86400 });
  }

  //hours
  let hours = [];
  for (let i = 0; i <= 23; i++) {
    hours.push({ label: i, value: i * 3600 });
  }

  //minutes
  let minutes = [];
  for (let i = 0; i <= 59; i++) {
    minutes.push({ label: i, value: i * 60 });
  }

  return [days, hours, minutes];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  closeContainer: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    marginTop: StatusBar.currentHeight + 5,
    marginRight: 10,
  },
  pageTitle: {
    fontFamily: "Almarai-ExtraBold",
    textAlign: "center",
    color: Colors.white,
    fontSize: 30,
    marginTop: 20,
  },
  inputsContainer: {
    paddingHorizontal: 15,
    marginTop: 40,
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
  pickersContainer: {
    flexDirection: "row-reverse",
    marginBottom: 50,
  },
  pickerBtn: {
    width: width / 3 - 20,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 14,
    marginStart: 15,
  },
  pickerBtnText: {
    color: Colors.white,
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    padding: 12,
  },
  pickerArrow: {
    position: "absolute",
    left: 12,
  },
  pickerText: {
    color: Colors.white,
    fontFamily: "Almarai-Regular",
    fontSize: 18,
  },
  createChatBtn: {
    alignSelf: "center",
    backgroundColor: Colors.green,
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.lightYellow,
  },
  createChatText: {
    fontFamily: "Almarai-Regular",
    fontSize: 20,
    color: Colors.lightYellow,
  },
});

export default NewChat;
