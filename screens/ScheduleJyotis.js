import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";

const ScheduleJyotis = () => {
  const [tab, setTab] = useState(false);
  const [date, setData] = useState("");
  const navigation = useNavigation();

//   const addZero = (a) => {
//     if (a < 10 && a > 0) {
//       return "0" + a.toString();
//     } else {
//       return a;
//     }
//   };

//   const getCurrentDate = () => {
//     var data = new Date().getDate();
//     var month = new Date().getMonth() + 1;
//     var year = new Date().getFullYear();

//     return year + "-" + addZero(month) + "-" + addZero(date);
//   };

//   const getMinDate = () => {
//     var date = new Date.getDate();
//     var month = new Date().getMonth() + 1;
//     var year = new Date().getFullYear();
//     return year + "-" + addZero(month) + "-" + addZero(date);
//   };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#f2f2f2" />
      <ScrollView
        style={{ width: "100%", backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ paddingVertical: 10 }}>
          <MaterialIcons
            name={"arrow-back-ios"}
            size={25}
            onPress={() => navigation.navigate("Schedule")}
          />
        </View>
        <Text style={{ fontSize: 28, width: "70%" }}>
          <Text style={{ fontWeight: "bold" }}>Who</Text> do you want to meet?
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#818181" }}>
            Select a Date
          </Text>

        </View>
        <TouchableOpacity
          style={{
            color: "#fff",
            backgroundColor: "black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("schedule-jyotis")}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Book Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleJyotis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 15,
  },
});

//
