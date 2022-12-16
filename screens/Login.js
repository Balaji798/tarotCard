import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import countryTelData from "country-telephone-data";
import { useNavigation } from "@react-navigation/native";
import ApiService from "../services/api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import React, { useState } from "react";
import PageWrapperView from "../components/PageWrapperView";
import CountrySelector from "../components/CountrySelector";

const Login = () => {
  const [data, setData] = useState(countryTelData.allCountries);
  const [callingCode,setCallingCode] = useState(data[0].dialCode)
  const [modal,setModal]=useState(false);
  const [countryCode,setCountryCode]=useState();
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const apiWrapper = useConditionWrapper();

  return (
    <PageWrapperView
    topSafeArea
    dark
    style={{
      flex: 1,
      paddingHorizontal: 16,
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 40,
      backgroundColor:"#fff",
      paddingBottom:20
    }}
    statusBar={{ background: "#ffffff" }}
  >
      <Image
        source={require("../assets/kali.png")}
        resizeMode="cover"
        style={{
          width: 250,
          height: 280,
        }}
      />
      <View style={{ justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 5 }}>
          Enter Your Phone Number
        </Text>
        <Text style={{ fontSize: 16, paddingBottom: 20 }}>
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
            height:52
          }}
        >
          <TouchableOpacity
          onPress={()=>setModal(!modal)}
            style={{
              borderRightWidth: 1,
              borderColor: "#555555",
              paddingRight: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 5,
              paddingBottom: 5,
              height:30
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#555555",
              }}
            >
              +{callingCode}
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Phone Number"
            style={{ flex: 1, paddingLeft: 5, fontSize: 16 }}
            onChangeText={(newText) => setPhone(newText)}
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
        onPress={async () =>
          apiWrapper(async () => {
            await ApiService.sendLoginOTP(phone,callingCode);
            navigation.navigate("Verification",{phone:phone});
          })}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Continue</Text>
      </TouchableOpacity>
      <CountrySelector data={data} modal={modal} setModal={setModal} setCallingCode={setCallingCode}/>
    </PageWrapperView>
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
