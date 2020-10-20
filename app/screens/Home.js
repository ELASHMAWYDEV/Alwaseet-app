import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";

const window = Dimensions.get("window");

//Assets
import Colors from "../settings/Colors";

//Components
import ActiveChat from "../components/ActiveChat";
import InactiveChat from "../components/InactiveChat";

const Home = ({ navigation }) => {
  const [activeChats, setActiveChats] = useState([
    {
      _id: "15689456",
      title: "هنا يوضع عنوان المحادثة",
      expDate: 1602984720000,
      firstUsername: "Ahmed",
      secondUsername: "Mahmoud",
      chatNumber: 51689117,
      status: "active",
    },
    {
      _id: "15689456",
      title: "هنا يوضع عنوان المحادثة",
      expDate: 1602684725100,
      firstUsername: "Ahmed",
      secondUsername: "Mahmoud",
      chatNumber: 51689117,
      status: "active",
    },
  ]);

  const [inactiveChats, setInactiveChats] = useState([
    {
      _id: "15689456",
      title: "هنا يوضع عنوان المحادثة",
      expDate: 1602682030456,
      firstUsername: "Ahmed",
      secondUsername: "Mahmoud",
      chatNumber: 51689117,
      status: "inactive",
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => null}>
          <Image
            source={require("../assets/img/star.png")}
            style={styles.starImage}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/img/logo.png")}
          style={styles.logoImage}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={require("../assets/img/logout.png")}
            style={styles.logoutImage}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.headText}>المحادثات الفعالة</Text>
          <View style={styles.headDot}></View>
        </View>
        {activeChats.length !== 0 ? (
          activeChats.map((chat, i) => <ActiveChat key={i} chat={chat} />)
        ) : (
          <Text style={styles.noChatText}>
            لا يوجد محادثات فعالة حاليا ، يمكنك انشاء محادثة جديدة بالضغط علي
            الزر الأحمر في الأسفل
          </Text>
        )}
        <View style={styles.headContainer}>
          <Text style={styles.headText}>المحادثات المنتهية</Text>
          <View
            style={[styles.headDot, { backgroundColor: Colors.red }]}
          ></View>
        </View>
        {inactiveChats.length !== 0 ? (
          inactiveChats.map((chat, i) => <InactiveChat key={i} chat={chat} />)
        ) : (
          <Text style={styles.noChatText}>ليس هناك أي محادثات منتهية</Text>
        )}
        <View style={styles.emptyView}></View>
      </ScrollView>
      <View style={styles.bottomBar}></View>
      <View style={styles.addNewContainer}>
        <TouchableNativeFeedback
          useForeground
          onPress={() => navigation.navigate("NewChat")}
        >
          <View style={styles.addNewBtn}>
            <View style={styles.lineOne}></View>
            <View style={styles.lineTwo}></View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bodyContainer: {
    backgroundColor: Colors.lightBlue,
  },
  emptyView: {
    height: 150,
  },
  bottomBar: {
    width: "100%",
    backgroundColor: Colors.black,
    height: 60,
    position: "absolute",
    bottom: 0,
  },
  addNewContainer: {
    position: "absolute",
    bottom: 60 / 4 + 4,
    width: window.width * 0.21,
    height: window.width * 0.21,
    borderRadius: (window.width * 0.21) / 2,
    backgroundColor: Colors.lightBlue,
    alignSelf: "center",
    borderTopColor: "transparent",
    borderTopWidth: (window.width * 0.21) / 2,
  },
  addNewBtn: {
    width: window.width * 0.18,
    height: window.width * 0.18,
    borderRadius: (window.width * 0.18) / 2,
    backgroundColor: Colors.red,
    bottom: (window.width * 0.21) / 2 - 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  lineOne: {
    backgroundColor: Colors.lightYellow,
    width: (window.width * 0.17) / 2,
    height: 3,
    borderRadius: 5,
  },
  lineTwo: {
    backgroundColor: Colors.lightYellow,
    width: 3,
    height: (window.width * 0.17) / 2,
    borderRadius: 5,
    position: "absolute",
  },
  headContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: Colors.lightYellow,
  },
  headText: {
    fontFamily: "Almarai-Bold",
    fontSize: 28,
    textAlign: "center",
  },
  headDot: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: Colors.green,
    marginRight: 10,
  },
  noChatText: {
    fontFamily: "Almarai-Regular",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 25,
    backgroundColor: Colors.blue,
    color: Colors.white,
    paddingHorizontal: 20,
    lineHeight: 30,
  },
});

export default Home;
