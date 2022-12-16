import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
import React from "react";
import PageWrapperView from "../components/PageWrapperView";
import ApiService from "../services/api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import DateTimePicker from "@react-native-community/datetimepicker";
import Feather from "react-native-vector-icons/Feather";
import useApi from "../hooks/useApi";
import { useState } from "react";
import Options from "../components/Options";
import Select from "../components/Select";
import { getAllCountryNames, getStates } from "../utils/countries";
//import BottomButton from "../components/BottomButton";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const validateEmail = (email) => {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(String(email).toLowerCase());
};

const EditProfile = () => {
  const [position, setPosition] = useState(-1);
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [data2, setData2] = useState({
    firstName: "",
    lastName: "",
    date_of_birth: "Empty",
    email: "",
    nationality: "",
    emirate: "",
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    const month = tempDate.getMonth() + 1;

    let fDate =
      tempDate.getDate() + " " + months[month] + " " + tempDate.getFullYear();
    setData2({ ...data2, date_of_birth: fDate });
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const navigation = useNavigation();

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: user,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getUser();
        const user = res.data;
        return user;
      }),
    []
  );
  

  const changeGender = (gender, index) => {
    setPosition(index);
    setGender(gender);
  };

  const dummy = ["Male", "Female", "Other"];
console.log(data2,gender);
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingBottom: 20,
      }}
      statusBar={{ background: "#ffffff" }}
    >
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
            value={data2?.firstName}
            onChangeText={(firstName) => {
              setError({
                ...error,
                firstName:
                  firstName === "" ||
                  firstName === undefined ||
                  firstName === null,
              });
              setData2({ ...data2, firstName });
            }}
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
            value={data2?.lastName}
            onChangeText={(lastName) => {
              setError({
                ...error,
                lastName:
                  lastName === "" ||
                  lastName === undefined ||
                  lastName === null,
              });
              setData2({ ...data2, lastName });
            }}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Date Of Birth <Text style={{ color: "red" }}>*</Text>
          </Text>

          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Date Of Birth"
              value={data2.date_of_birth}
            />
            <Feather
              name="calendar"
              size={25}
              style={{ paddingVertical: 10 }}
              onPress={() => showMode("date")}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <Options
          title="Gender"
          style={{ marginBottom: 30 }}
          value={gender}
          setValue={(text) => setGender(text)}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" },
          ]}
        />
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Your Email <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="Enter Your Email"
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            error={error.email}
            title="Your Email"
            maxLength={30}
            value={data2?.email}
            onChangeText={(email) => {
              setError({ ...error, email: !validateEmail(email) });
              setData2({ ...data2, email });
            }}
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ color: "grey", paddingVertical: 5 }}>
            Your Phone Number <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 1.3,
              borderColor: "#d3d3d3",
              paddingVertical: 10,
              borderRadius: 10,
            }}
            // value={user.data.phone}
          />
        </View>
        <Select
          searchBarPlaceholder="Search your country"
          placeholder="Select your country"
          title="Nationality"
          style={{ marginBottom: 30 }}
          value={data2?.nationality}
          setValue={(nationality) => setData2({ ...data2, nationality })}
          data={getAllCountryNames()}
        />
        <Select
          // searchBarPlaceholder={`Search ${
          //   countryConfig.region_short_name === "AE" ? "Emirate" : "State"
          // }`}
          placeholder="Select your State"
          title="State"
          style={{ marginBottom: 30 }}
          value={data2?.state || data2?.emirate}
          setValue={(state) => setData2({ ...data2, emirate: state })}
          data={getStates()}
        />
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1.5,
            borderColor: "#d3d3d3",
            borderRadius: 25,
            backgroundColor: "#d9d9d9",
          }}
          onPress={async () =>
            apiWrapper(async () => {
              await ApiService.editUser(gender,data2)
              navigation.navigate("Home");
            })
          }
        >
          <Text style={{ fontWeight: "bold", color: "grey", fontSize: 16 }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </PageWrapperView>
  );
};

export default EditProfile;
