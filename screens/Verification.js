import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import OTPInput from "../components/OTPInput";
import OTPTextInput from "react-native-otp-textinput";
// import { useDispatch, useSelector } from 'react-redux';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useConditionWrapper from "../hooks/useConditionWrapper";
import PageWrapperView from "../components/PageWrapperView";
import ResendOTP from "../components/ResendOTP";
const windowWidth = Dimensions.get("window").width;

const OTPValidator = (otp) => {
  const regex = /^\d+$/;
  return regex.test(otp);
};

const Verification = () => {
  const [OTP, setOTP] = useState();
  // const { countryConfig, auth } = useSelector((state) => state);
  // const insets = useSafeAreaInsets();

  // const dispatch = useDispatch();
  // const keyBoardState = useKeyboard();

  // const apiWrapper = useConditionWrapper();

  // const authenticate = () =>
  //   apiWrapper(async () => {
  //     const { data } = await ApiService.customerLogin(
  //       auth.user.number,
  //       OTP,
  //       countryConfig.country_code
  //     );
  //     await AsyncStorage.setItem("token", data.token);
  //     authSuccessful(dispatch, data);
  //     return;
  //   });
  const navigation = useNavigation();
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{
        flex: 1,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 40,
      }}
      statusBar={{ background: "#ffffff" }}
    >
      <Image
        source={require("../assets/kali.png")}
        resizeMode="cover"
        style={{
          width: 195,
          height: 314,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled
      >
        <SafeAreaView
          style={{ height: "60%", justifyContent: "space-between",paddingTop:40 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}>
            Enter Your Code
          </Text>
          <Text style={{ fontSize: 17, paddingBottom: 15 }}>
            Please enter the 6 digit verification code sent to{" "}
            <Text style={{ fontWeight: "bold" }}>+91********77</Text>
          </Text>
          {Platform.select({
            ios: (
              <OTPInput
                digits={6}
                onChangeOTP={(otp) => setOTP(otp)}
                style={{ marginTop: 24, backgroundColor: "#efefef" }}
              />
            ),
            android: (
              <OTPTextInput
                inputCount={6}
                tintColor={"#191C271D"}
                offTintColor={"#191C270A"}
                containerStyle={{ marginTop: 16 }}
                textInputStyle={{
                  backgroundColor: "#efefef",
                  borderRadius: 12,
                  height: 60,
                  width: (windowWidth - 32) / 6 - 6,
                  borderBottomWidth: 0,
                  margin: 0,
                }}
                handleTextChange={(otp) => setOTP(otp)}
              />
            ),
          })}
          {!OTP ||
            (!OTPValidator(OTP) && (
              <Text
                style={{
                  color: "#f13d3d",
                  fontSize: "smd",
                  marginTop: 12,
                  marginBottom: -29,
                }}
              >
                Please enter a valid OTP
              </Text>
            ))}
            <View style={{ alignItems:'center',justifyContent:"center",height:70 }}>
            {/* <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Resend Code
            </Text> */}
            <ResendOTP/>
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
                width: "100%",
              }}
              onPress={() => navigation.navigate("Tabs")}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </PageWrapperView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 100,
    paddingBottom: 20,
  },
});
