import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";

const ScheduleScreens = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>Schedule</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            paddingLeft: 30,
            paddingRight: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: 18 }}
            onPress={() => navigation.navigate("jyotis-booking")}
          >
            + Book
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "silver",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            padding: 15,
            backgroundColor: "black",
            color: "#fff",
            fontSize: 16,
            borderRadius: 10,
          }}
        >
          Upcoming
        </Text>
        <View
          style={{
            paddingVertical: 10,
            justifyContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 15,
              borderRightWidth: 1,
              fontSize: 16,
            }}
          >
            Completed
          </Text>
        </View>
        <Text style={{ fontSize: 16, padding: 15 }}>Canceled</Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 10,
          marginTop: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 0.5,
            paddingBottom: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Jyotish Name
            </Text>
            <Text>Jyotish Name</Text>
          </View>
          <View
            style={{
              height: 50,
              backgroundColor: "#d5d5d5",
              width: 50,
              borderRadius: 30,
              marginTop: 10,
              marginLeft: 10,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name={"calendar-alt"} color={"#5d5d5d"} size={18} />
            <Text style={{ color: "#181818", paddingLeft: 5, paddingRight: 5 }}>
              24/03/2001
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <AntDesign name={"clockcircle"} color={"#5d5d5d"} size={18} />
            <Text style={{ color: "#181818", paddingLeft: 5 }}>10:30 AM</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name={"dot-single"} color={"green"} size={25} />
            <Text style={{ color: "#181818" }}>Confirmed</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              backgroundColor: "#d9d9d9",
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 8,
              width: "43%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 8,
              width: "43%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Map
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 10,
          marginTop: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 0.5,
            paddingBottom: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Jyotish Name
            </Text>
            <Text>Jyotish Name</Text>
          </View>
          <View
            style={{
              height: 50,
              backgroundColor: "#d5d5d5",
              width: 50,
              borderRadius: 30,
              marginTop: 10,
              marginLeft: 10,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name={"calendar-alt"} color={"#5d5d5d"} size={18} />
            <Text style={{ color: "#181818", paddingLeft: 5, paddingRight: 5 }}>
              24/03/2001
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <AntDesign name={"clockcircle"} color={"#5d5d5d"} size={18} />
            <Text style={{ color: "#181818", paddingLeft: 5 }}>10:30 AM</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name={"dot-single"} color={"green"} size={25} />
            <Text style={{ color: "#181818" }}>Confirmed</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              backgroundColor: "#d9d9d9",
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 8,
              width: "43%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 8,
              width: "43%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Map
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingLeft: 15,
    paddingRight: 15,
  },
});
