import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const TarotDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1621" />
      <View style={styles.bigCircle}></View>
      <MaterialIcons
        name={"arrow-back-ios"}
        size={25}
        style={{ paddingVertical: 10, color: "#fff" }}
        onPress={() => navigation.navigate("tarot-cadres")}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
        Tarot Card Name
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            height: 200,
            width: "40%",
            backgroundColor: "#d9d9d9",
            borderRadius: 10,
            marginBottom:10
          }}
        ></View>
      </View>
      <ScrollView
        style={{ width: "100%", backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={{ marginTop: 20, fontSize: 16 }}>
          {" "}
          Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing elit. In
          porta diam sit amet risus pretium, ut consequat felis eleifend. Donec
          sapien est, malesuada quis dapibus in, condimentum a quam. Morbi justo
          nisi, malesuada vel nulla eu, semper ornare risus.
        </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              height: 180,
              width: "100%",
              backgroundColor: "#d9d9d9",
              borderRadius: 10,
            }}
          ></View>
        </View>
        <Text>
          Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing elit. In
          porta diam sit amet risus pretium, ut consequat felis eleifend. Donec
          sapien est, malesuada quis dapibus in, condimentum a quam. Morbi justo
          nisi, malesuada vel nulla eu, semper ornare risus. Fusce commodo, sem
          ac hendrerit placerat, ante dui bibendum nisl, ut scelerisque diam
          lectus id sem. Integer id maximus lorem, eget efficitur sapien.
          Integer aliquet urna id sapien laoreet molestie.{" "}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TarotDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  bigCircle: {
    backgroundColor: "#1e1621",
    position: "absolute",
    // width: Dimensions.get("window").width * 1.11,
    // height: 650,
    borderRadius: 1000,
    top: -180,
    left: Dimensions.get("window").width * -0.04,
    width: Dimensions.get("window").width * 1.07,
    height: Dimensions.get("window").width * 1.1,
  },
});
