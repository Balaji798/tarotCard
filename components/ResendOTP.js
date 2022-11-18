// import { ActivityIndicator, StyleSheet,Text } from 'react-native';
// import React, { useEffect, useState } from 'react';
// // import { MyText } from './MyDesign';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// // import { useSelector } from 'react-redux';
// // import ApiService from '../services/api/ApiService';
// import useConditionWrapper from '../hooks/useConditionWrapper';

// const ResendOTP = () => {
// 	const [timer, setTimer] = useState(30);
// 	const [showTimer, setShowTimer] = useState(true);
// 	const [isLoading, setIsLoading] = useState(false);
// 	// const { countryConfig, auth } = useSelector((state) => state);

// 	// const apiWrapper = useConditionWrapper();

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setTimer((prev) => {
// 				const t = prev - 1;
// 				if (t > 0) {
// 					return t;
// 				} else if (t === 0) {
// 					setShowTimer(false);
// 					setIsLoading(false);
// 				}
// 			});
// 		}, 1000);

// 		return () => {
// 			clearInterval(interval);
// 		};
// 	}, []);

// 	// const sendOTP = () =>
// 		// apiWrapper(async () => {
// 		// 	setIsLoading(true);
// 		// 	await ApiService.sendLoginOTP(auth?.user?.number, countryConfig.country_code);
// 		// 	setShowTimer(true);
// 		// 	setTimer(30);
// 		// });

// 	return !showTimer ? (
// 		isLoading ? (
// 			<ActivityIndicator size="small" color="rgb(45,145,65)" style={{ padding: 16 }} />
// 		) : (
// 			<TouchableOpacity
// 				// onPress={sendOTP}
// 				style={{ textAlign: 'center', padding: 16, justifyContent: 'center', alignItems: 'center' }}>
// 				<Text style={{ fontSize: 'smd', color: 'rgb(45,145,65)' }} bold>
// 					Resend OTP
// 				</Text>
// 			</TouchableOpacity>
// 		)
// 	) : (
// 		<Text bold style={{ fontSize: 'smd', color: '#7c7c7c', textAlign: 'center', padding: 16 }}>
// 			Resend OTP in{' '}
// 			<Text bold style={{ fontSize: 'smd', color: '#7c7c7c' }}>
// 				00:
// 				{timer > 9 ? timer : `0${timer}`}
// 			</Text>
// 		</Text>
// 	);
// };

// export default ResendOTP;

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import useConditionWrapper from "../hooks/useConditionWrapper";

const ResendOTP = () => {
  const [timer, setTimer] = useState(30);
  const [showTimer, setShowTimer] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const t = prev - 1;
        if (t > 0) {
          return t;
        } else if (t === 0) {
          setShowTimer(false);
          setIsLoading(false);
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return !showTimer ? (
    isLoading ? (
      <ActivityIndicator
        size="small"
        color="rgb(45,145,65)"
        style={{ padding: 16 }}
      />
    ) : (
      <TouchableOpacity
        // onPress={sendOTP}
        style={{
          textAlign: "center",
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize:16, color: "#181818" }} bold>
          Resend OTP
        </Text>
      </TouchableOpacity>
    )
  ) : (
    <View>
      <Text
        bold
        style={{
          fontSize: 16,
          color: "#181818",
          textAlign: "center",
          padding: 16,
        }}
      >
        Resend OTP in{" "}
        <Text bold style={{ fontSize: 16, color: "#181818" }}>
          00:
          {timer > 9 ? timer : `0${timer}`}
        </Text>
      </Text>
    </View>
  );
};

export default ResendOTP;

const styles = StyleSheet.create({});
