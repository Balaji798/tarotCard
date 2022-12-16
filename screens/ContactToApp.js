import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import PageWrapperView from "../components/PageWrapperView";
import Input from "../components/Input";

const ContactToApp = () => {
  const navigation = useNavigation();
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
      statusBar={{ background: "#ffffff" }}
    >
      <Octicons
        name="arrow-left"
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Profile")}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Get in touch if you need help
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#e0ffe0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Feather name="phone" style={{ color: "green", fontSize: 15 }} />
          </View>
          <Text style={{ paddingLeft: 10 }}>+91 9746 311 522</Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#e0ffe0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Fontisto name="email" style={{ color: "green", fontSize: 15 }} />
          </View>
          <Text style={{ paddingLeft: 10 }}>tarot@tarot.com</Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#e0ffe0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <EvilIcons
              name="location"
              style={{ color: "green", fontSize: 25 }}
            />
          </View>
          <Text style={{ paddingLeft: 10 }}>
            Tarot Management Office, 2/1149G, HiLTE Mail, HiLTE City, NH
            Thondayad Bypass, Kozhikode, Kerala-673014
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingTop: 30,
            paddingBottom: 10,
          }}
        >
          Send a message
        </Text>
        <Text style={{ color: "grey", paddingVertical: 5 }}>
          Your Name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          placeholder="Your Name"
          style={{
            paddingLeft: 15,
            fontSize: 16,
            borderWidth: 1.3,
            borderColor: "#d3d3d3",
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onChangeText={() => {}}
        />
        <Text style={{ color: "grey", paddingTop: 20, paddingBottom: 5 }}>
          Your Email <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          required
          title="Your mail"
          placeholder="Email"
          style={{
            paddingLeft: 15,
            fontSize: 16,
            borderWidth: 1.3,
            borderColor: "#d3d3d3",
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onChangeText={() => {}}
        />
        <Input
          required
          placeholder="Enter Your Message"
          title="Your Message"
          textArea
          maxLength={255}
          //value={data.message}
          onChangeText={() => {}}
          style={{ marginBottom: 30 }}
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#d9d9d9",
            borderRadius: 25,
            paddingBottom: 10,
            paddingTop: 10,
            marginTop: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey" }}>
            Submit
          </Text>
        </View>
      </ScrollView>
    </PageWrapperView>
  );
};

export default ContactToApp;
