import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Verification = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/kali.png")}
        resizeMode="cover"
        style={{
          width: 250,
          height: 280,
        }}
      />
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}>
          Enter Your Code
        </Text>
        <Text style={{ fontSize: 17,paddingBottom:15 }}>
          Please enter the 6 digit verification code sent to{" "}
          <Text style={{ fontWeight: "bold" }}>+91********77</Text>
        </Text>

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 5,
            paddingBottom: 5,
            width: "100%",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              width: 45,
              height: 50,
              backgroundColor: "#d9d9d9",
              borderRadius: 5,
              textAlign: "center",
            }}
            onChangeText={() => {}}
          />
          <TextInput
            style={{
              fontSize: 16,
              backgroundColor: "#d9d9d9",
              borderRadius: 5,
              width: 45,
              height: 50,
              textAlign: "center",
            }}
            onChangeText={() => {}}
          />
          <TextInput
            style={{
              fontSize: 16,
              backgroundColor: "#d9d9d9",
              borderRadius: 5,
              width: 45,
              height: 50,
              textAlign: "center",
            }}
            onChangeText={() => {}}
          />
          <TextInput
            style={{
              fontSize: 16,
              backgroundColor: "#d9d9d9",
              borderRadius: 5,
              width: 45,
              height: 50,
              textAlign: "center",
            }}
            onChangeText={() => {}}
          />
          <TextInput
            style={{
              fontSize: 16,
              backgroundColor: "#d9d9d9",
              borderRadius: 5,
              width: 45,
              height: 50,
              textAlign: "center",
            }}
            onChangeText={() => {}}
          />
          <TextInput
            style={{
              fontSize: 16,
              backgroundColor: "#d9d9d9",
              borderRadius: 5,
              width: 45,
              height: 50,
              textAlign: "center",
            }}
            onChangeText={() => {}}
          />
        </View>
      </View>
      <View style={{width:"100%",alignItems:"center",justifyContent:"space-between",height:90}}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Resend Code</Text>
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
          }}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100,
    paddingBottom: 20,
  },
});
