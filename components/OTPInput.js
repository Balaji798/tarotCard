import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;

// a react native input component that takes otp input and shows it in different boxes
const OTPInput = (props) => {
  const [OTP, setOTP] = useState(Array(props.digits).fill(""));
  const otpIndex = useRef(0);
  const otpInputRef = useRef(null);
  const [OTPInputText, setOTPInputText] = useState("");

  useEffect(() => {
    props.onChangeOTP(OTP.join(""));
  }, [OTP]);

  return (
    <>
      <TextInput
        ref={otpInputRef}
        keyboardType="numeric"
        value={OTPInputText}
        maxLength={props.digits}
        onChangeText={(value) => {
          if (value.length === 1) {
            const otp = [...OTP];
            otp[otpIndex.current] = value;
            setOTP(otp);
            if (otpIndex.current === OTP.length - 1) {
              otpInputRef.current.blur();
            }
            otpIndex.current = otpIndex.current + 1;
          } else if (value.length === OTP.length) {
            otpIndex.current = 0;
            setOTP((prevOTP) => {
              let newOTP = [...prevOTP];
              value
                .trim()
                .split("")
                .forEach((char) => {
                  newOTP[otpIndex.current] = char;
                  otpIndex.current = otpIndex.current + 1;
                });
              return newOTP;
            });
            otpInputRef.current.blur();
          }
        }}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === "Backspace") {
            const otp = [...OTP];
            otp[otpIndex.current] = "";
            setOTP(otp);
            if (otpIndex.current !== 0) otpIndex.current = otpIndex.current - 1;
          }
        }}
        style={{ height: 0, display: "none",backgroundColor:"#efefef" }}
        autoFocus={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginHorizontal: -8,
          ...props.style,
        }}
      >
        {OTP.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor:
                otpIndex.current === index ? "#191C271D" : "#191C270A",
              width:
                props?.textInputWidth || (windowWidth - 32) / props.digits - 6,
              height:
                (20 *
                  (props?.textInputWidth ||
                    (windowWidth - 32) / props.digits - 10)) /
                16,
            }}
            onPress={() => {
              otpIndex.current = index;
              otpInputRef.current.focus();
            }}
          >
            <Text style={{ fontSize: "lg" }} bold>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default OTPInput;