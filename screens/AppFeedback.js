import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
import React from "react";
import PageWrapperView from "../components/PageWrapperView";

const AppFeedback = () => {
  const red = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigation = useNavigation();
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: "space-between",
      }}
      statusBar={{ background: "#d9d9d9" }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Octicons
        name="arrow-left"
        size={25}
        onPress={() => navigation.navigate("Profile")}
      />

      <Text style={{ fontWeight: "bold", fontSize: 23, paddingTop: 5 }}>
        App Feedback
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", paddingBottom: 15, fontSize: 15 }}>
          How satisfied are you with the look and feel of the app ?
        </Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text>Very Unlikely</Text>
          <Text>Very Likely</Text>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          {red.map((item, index) => (
            <View
              style={{
                backgroundColor:
                  item <= 6
                    ? "#e42217"
                    : item >= 7 && item <= 8
                    ? "#f6be00"
                    : "#008000",
                color: "#fff",
                width: "10%",
                borderRightWidth: 1,
                borderRightColor: "#fff",
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderRightColor: "#fff",
                borderTopLeftRadius: item === 1 ? 5 : 0,
                borderBottomLeftRadius: item === 1 ? 5 : 0,
                borderTopRightRadius: item === 10 ? 5 : 0,
                borderBottomRightRadius: item === 10 ? 5 : 0,
              }}
              key={index}
            >
              <Text style={{ color: "#fff" }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", paddingBottom: 15, fontSize: 15 }}>
          How satisfied are you with the ease of use of the app?
        </Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text>Very Unlikely</Text>
          <Text>Very Likely</Text>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          {red.map((item, index) => (
            <View
              style={{
                backgroundColor:
                  item <= 6
                    ? "#e42217"
                    : item >= 7 && item <= 8
                    ? "#f6be00"
                    : "#008000",
                width: "10%",
                borderRightWidth: 1,
                borderRightColor: "#fff",
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: item === 1 ? 5 : 0,
                borderBottomLeftRadius: item === 1 ? 5 : 0,
                borderTopRightRadius: item === 10 ? 5 : 0,
                borderBottomRightRadius: item === 10 ? 5 : 0,
              }}
              key={index}
            >
              <Text style={{ color: "#fff" }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", paddingBottom: 15, fontSize: 15 }}>
          How satisfied are you with the loading speed of the mobile app?
        </Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text>Very Unlikely</Text>
          <Text>Very Likely</Text>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          {red.map((item, index) => (
            <View
              style={{
                backgroundColor:
                  item <= 6
                    ? "#e42217"
                    : item >= 7 && item <= 8
                    ? "#f6be00"
                    : "#008000",
                width: "10%",
                borderRightWidth: 1,
                borderRightColor: "#fff",
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: item === 1 ? 5 : 0,
                borderBottomLeftRadius: item === 1 ? 5 : 0,
                borderTopRightRadius: item === 10 ? 5 : 0,
                borderBottomRightRadius: item === 10 ? 5 : 0,
              }}
              key={index}
            >
              <Text style={{ color: "#fff" }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", paddingBottom: 15, fontSize: 15 }}>
          How would you rate your customer sport experience
        </Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text>Very Unlikely</Text>
          <Text>Very Likely</Text>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          {red.map((item, index) => (
            <View
              style={{
                backgroundColor:
                  item <= 6
                    ? "#e42217"
                    : item >= 7 && item <= 8
                    ? "#f6be00"
                    : "#008000",
                width: "10%",
                borderRightWidth: 1,
                borderRightColor: "#fff",
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: item === 1 ? 5 : 0,
                borderBottomLeftRadius: item === 1 ? 5 : 0,
                borderTopRightRadius: item === 10 ? 5 : 0,
                borderBottomRightRadius: item === 10 ? 5 : 0,
              }}
              key={index}
            >
              <Text style={{ color: "#fff" }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#d9d9d9",
          borderRadius: 25,
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey" }}>
          Submit
        </Text>
      </View>
    </PageWrapperView>
  );
};

export default AppFeedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingVertical: 25,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
});
