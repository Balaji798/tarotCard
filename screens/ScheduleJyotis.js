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

  const [month,setMonth] = useState(new Date().getMonth());



  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const week = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];

  const [newMonth, setNewMonte] = useState(monthName[month]);

  const next=()=>{
    setMonth(month+1);
    if(month <=11 && month >=0)
    setNewMonte(monthName[month])
 }

 const previous =()=>{

  if(month <=11 && month >=0) {
    setMonth(month-1)
    setNewMonte(monthName[month])
  }
 }
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
  //
  //     var year = new Date().getFullYear();
  //     return year + "-" + addZero(month) + "-" + addZero(date);
  //   };

  var year = new Date().getFullYear();

  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);
  
    const dates = [];
  
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }
  
  const now = new Date();

  // 👇️ all days of the current month
  const days = getAllDaysInMonth(now.getFullYear(), now.getMonth());


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"  backgroundColor="#f2f2f2" />
      <ScrollView
        style={{
          width: "100%",
          backgroundColor: "transparent",
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ paddingVertical: 10 }}>
          <MaterialIcons
            name={"arrow-back-ios"}
            size={25}
            onPress={() => navigation.navigate("jyotis-booking")}
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
        <View
          style={{
            width: "100%",
            paddingVertical: 10,
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderRadius: 10,
            marginVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MaterialIcons
              name={"arrow-back-ios"}
              size={25}
              onPress={ previous}
            />
            <Text style={{ fontSize: 20 }}>
              {newMonth} {year}
            </Text>
            <MaterialIcons
              name={"arrow-forward-ios"}
              size={25}
              onPress={next}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              paddingRight: 15,
              paddingLeft: 10,
            }}
          >
            {week.map((item, index) => (
              <View
                key={index}
                style={{
                  width: 40,
                  height: 35,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>{item}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            {days.map((item, index) => (
              <View
                style={{
                  width: 48,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>{item.getDate()}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "#818181" }}>
            Available Slots
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical:10
            }}
          >
            <View
              style={{
                width: 105,
                height: 48,
                backgroundColor: "#d9d9d9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginBottom: 5,
                marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>10.00 AM</Text>
            </View>
            <View
              style={{
                width: 105,
                height: 48,
                backgroundColor: "#d9d9d9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginBottom: 5,
                marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>11.00 AM</Text>
            </View>
            <View
              style={{
                width: 105,
                height: 48,
                backgroundColor: "#d9d9d9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>01.00 PM</Text>
            </View>
            <View
              style={{
                width: 105,
                height: 48,
                backgroundColor: "#d9d9d9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginBottom: 5,
                marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>02.00 PM</Text>
            </View>
            <View
              style={{
                width: 105,
                height: 48,
                backgroundColor: "#d9d9d9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>05.00 PM</Text>
            </View>
          </View>
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
    </View>
  );
};

export default ScheduleJyotis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

//
