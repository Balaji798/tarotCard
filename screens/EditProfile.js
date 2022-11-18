import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import PageWrapperView from "../components/PageWrapperView";

const EditProfile = () => {
  const navigation = useNavigation();
  return (
    <PageWrapperView topSafeArea dark style={{ flex: 1,paddingHorizontal:15, justifyContent: "space-between", }} statusBar={{ background: '#ffffff' }}>
      <Octicons
        name="arrow-left"
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Profile")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Complete Your Profile
        </Text>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            First Name <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="First Name"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onChangeText={() => {}}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Last Name <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="Last Name"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onChangeText={() => {}}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Date Of Birth <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="Date Of Birth"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onChangeText={() => {}}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Gender <Text style={{ color: "red" }}>*</Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              borderWidth: 1.3,
              borderColor:"#d3d3d3",
              borderRadius: 5,
            }}
          >
            <View
              style={{
                paddingVertical: 10,
                fontSize: 16,
                borderRightWidth: 1.5,
                borderRightColor:"#d5d5d5",
                justifyContent: "center",
                alignItems: "center",
                width:"33%",
              }}
            >
             <Text>Male</Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
                fontSize: 16,
                borderRightWidth: 1.5,
                borderRightColor:"#d5d5d5",
                justifyContent: "center",
                alignItems: "center",
                width:"33%",
              }}
            >
             <Text>Female</Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
                fontSize: 16,
                justifyContent: "center",
                alignItems: "center",
                width:"33%",
              }}
            >
             <Text>Other</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Your Email <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="Phone Number"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onChangeText={() => {}}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Nationality <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="Phone Number"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onChangeText={() => {}}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            State <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="Phone Number"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onChangeText={() => {}}
          />
        </View>
      </ScrollView>
    </PageWrapperView>
  );
};

export default EditProfile;
