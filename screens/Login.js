import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Login = () => {
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
      <View style={{justifyContent:"space-between"}}>
        <Text style={{ fontWeight: "bold", fontSize: 20,paddingBottom:5 }}>
          Enter Your Phone Number
        </Text>
        <Text style={{ fontSize: 16,paddingBottom:20 }}>
          You will receive a 6 digit code for phone number verification
        </Text>
      <View
        style={{
          backgroundColor: "#d9d9d9",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 5,
          width: "100%",
        }}
      >
        <View
          style={{
            borderRightWidth: 1,
            borderColor: "#555555",
            paddingRight: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color:"#555555"
            }}
          >
            +91
          </Text>
        </View>
        <TextInput
          placeholder="Phone Number"
          style={{ flex: 1, paddingLeft: 5, fontSize: 16 }}
          onChangeText={() => {}}
        />
      </View>
      </View>
      <TouchableOpacity
        style={{
          color: "#fff",
          backgroundColor: "black",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
        onPress={() => navigation.navigate("Verification")}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
});
