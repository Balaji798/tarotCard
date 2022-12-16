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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import ApiService from "../services/api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";

const ScheduleJyotis = (props) => {
  const [date, setDate] = useState("");
  const [time,setTime] = useState("");
  const navigation = useNavigation();

  const id = props.route.params.id;

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: jyotis,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getJyotisById(id);
        const jyotis = res.data;
        return jyotis;
      }),
    []
  );
  const slots = jyotis.slots;
  console.log(time);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
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
            paddingVertical: 15,
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderRadius: 10,
            marginVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Calendar
            style={{ height: 350 }}
            theme={{
              textSectionTitleColor: "black",
              selectedDayBackgroundColor: "black",
              arrowColor: "black",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
            onDayPress={(day) => setDate(day.dateString)}
          />
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
              paddingVertical: 10,
            }}
          >
            {slots.map((item, index) => (
              <TouchableOpacity
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
                onPress={()=>setTime(item)}
              >
                <Text style={{ fontSize: 16 }}>{item}</Text>
              </TouchableOpacity>
            ))}
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
          //onPress={() => navigation.navigate("schedule-jyotis")}
          onPress={async () =>
            apiWrapper(async () => {
              await ApiService.schedule_jyotis(id,date,time)
              navigation.navigate("Home");
            })
          }
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
