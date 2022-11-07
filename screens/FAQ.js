import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const FAQ = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Octicons
        name="arrow-left"
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Profile")}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}>
        Frequently Asked Questions
      </Text>
      <Text style={{ paddingRight: 15 }}>
        We're here to help you with anything and everything on Tarot App
      </Text>
      <View
        style={{
          marginTop: 15,
          marginBottom: 25,
          borderWidth: 1.3,
          borderColor: "#d3d3d3",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <EvilIcons
          name="search"
          size={25}
          style={{ paddingVertical: 10, color: "grey" }}
          onPress={() => navigation.navigate("Profile")}
        />
        <TextInput
          placeholder="Search for help"
          style={{ fontSize: 16 }}
          onChangeText={() => {}}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>What is Tarot App</Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>How do i get my Tarot App</Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>How do i Register</Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, width: "90%" }}>
          is there a minimum sped amount or a joining fee to become an inaam
          member?
        </Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, width: "90%" }}>
          If i shop for less than Rs.100, am i eligible to earn points?
        </Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          How Safe is my personal information
        </Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, width: "90%" }}>
          My membership information has changed. How do i update my profile
        </Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#d5d5d5",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Will my tarot membership ever become inactive?
        </Text>
        <Feather name={"plus"} size={25} color={"grey"} />
      </View>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop:25,
    paddingHorizontal: 15,
  },
});
