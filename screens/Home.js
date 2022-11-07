import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1621" />
      <ScrollView style={{ width: "100%", backgroundColor: "transparent" }}>
        <View style={styles.topView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ paddingLeft: 20 }}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 28,
                  paddingTop: 50,
                }}
              >
                Morning,
              </Text>
              <Text style={{ color: "#fff", fontSize: 28 }}>John Doe</Text>
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
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{ color: "#fff", paddingLeft: 5, fontSize: 14 }}>
                  Taurus, 20 Sept 2022
                </Text>
              </View>
            </View>
            <Image
              source={require("../assets/kali.png")}
              resizeMode="cover"
              style={{
                width: 220,
                height: 220,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#d5d5d5",
              borderRadius: 10,
              padding: 10,

              marginLeft: 10,
              marginRight: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}
            >
              Today's Horoscope
            </Text>
            <Text style={{ fontSize: 16, color: "#555555" }}>
              Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
              elit. In porta diam sit amet risus pretium, ut consequat felis
              eleifend. Donec sapien est, malesuada quis dapibus in, condimentum
              a quam.
            </Text>
            <View
              style={{
                height: 46,
                backgroundColor: "grey",
                width: 46,
                borderRadius: 30,
                borderWidth: 2.5,
                borderColor: "black",
                marginTop: 10,
                marginLeft: 10,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            padding: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Check your horoscope
          </Text>
          <View
            style={{
              width: "100%",
              paddingTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                height: 90,
                width: 105,
                borderWidth: 1.5,
                borderColor: "#1e1621",
                borderRadius: 12,
                paddingLeft: 10,
                justifyContent: "space-around",
                borderColor: "#1109",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Tomorrow</Text>
              <Text style={{}}>Sept 27</Text>
              <FontAwesome5 name={"long-arrow-alt-right"} size={25} />
            </View>
            <TouchableOpacity
              style={{
                height: 90,
                width: 105,
                borderRadius: 10,
                paddingLeft: 10,
                justifyContent: "space-around",
                backgroundColor: "#1e1621",
              }}
              onPress={() => navigation.navigate("tarot-cadres")}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
                Weekly
              </Text>
              <Text style={{ color: "#fff" }}>Sept 27 -Oct 1</Text>
              <FontAwesome5
                name={"long-arrow-alt-right"}
                size={25}
                color={"#fff"}
              />
            </TouchableOpacity>
            <View
              style={{
                height: 90,
                width: 105,
                borderWidth: 1.5,
                borderRadius: 10,
                paddingLeft: 10,
                justifyContent: "space-around",
                borderColor: "#1109",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Monthly</Text>
              <Text style={{}}>Sept - Oct</Text>
              <FontAwesome5 name={"long-arrow-alt-right"} size={25} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingBottom: 70,
    color: "#fff",
    overflowY: "scroll",
  },
  topView: {
    maxHeight: 500,
    width: "100%",
    backgroundColor: "#1e1621",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 30,
  },
});
