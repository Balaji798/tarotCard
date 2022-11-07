import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import React from "react";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1621" />
      <View style={{ height: "40%" }}>
        <View style={styles.bigCircle}></View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 50,
            paddingBottom: 25,
          }}
        >
          <Text style={{ fontSize: 28, color: "#fff" }}>Profile</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 45,
              justifyContent: "space-between",
            }}
          >
            <MaterialIcons name="edit" color={"#fff"} size={16} />
            <Text
              style={{ color: "#fff", fontSize: 16 }}
              onPress={() => navigation.navigate("edit-profile")}
            >
              Edit
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 86,
            backgroundColor: "#322b35",
            borderRadius: 10,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 70,
              backgroundColor: "#d5d5d5",
              width: 70,
              borderRadius: 50,
            }}
          ></View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              John Deo
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Image
                source={require("../assets/taurus-removebg-preview.png")}
                style={{
                  paddingRight: 20,
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ color: "#fff", paddingLeft: 5, fontSize: 12 }}>
                Taurus, 20 Sept 2022
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingTop:10}}>
        <ScrollView>
          <Text style={{ color: "grey" }}>Tarot App</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("about-app")}
            >
              About Tarot App
            </Text>
            <SimpleLineIcons name={"arrow-right"} size={20} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("faqs")}
            >
              FAQs
            </Text>
            <SimpleLineIcons
              name={"arrow-right"}
              size={20}
              onPress={() => navigation.navigate("Schedule")}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("contact-to-tarot")}
            >
              Contact Us
            </Text>
            <SimpleLineIcons name={"arrow-right"} size={20} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("AppFeedback")}
            >
              App Feedback
            </Text>
            <SimpleLineIcons
              name={"arrow-right"}
              size={20}
              onPress={() => navigation.navigate("Schedule")}
            />
          </View>
          <Text style={{ color: "grey", paddingTop: 20, paddingBottom: 10 }}>
            Other
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("whats-new")}
            >
              What's New
            </Text>
            <SimpleLineIcons name={"arrow-right"} size={20} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16 }}>Check for Updates</Text>
            <SimpleLineIcons
              name={"arrow-right"}
              size={20}
              onPress={() => navigation.navigate("Schedule")}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
  },
  bigCircle: {
    backgroundColor: "#1e1621",
    position: "absolute",
    width: Dimensions.get("window").width * 1.6,
    height: Dimensions.get("window").width * 1.68,
    borderRadius: 1000,
    top: -330,
    left: Dimensions.get("window").width * -0.61,
  },
});
