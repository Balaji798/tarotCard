import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const TarotCadres = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <MaterialIcons
        name={"arrow-back-ios"}
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Home")}
      />
      {/* <StatusBar animated={true} backgroundColor="#d9d9d9" /> */}
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Check your</Text>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Text>Weekly</Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Horoscope</Text>
      <ScrollView
        style={{ width: "100%", backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            justifyContent: "space-between",
            paddingTop: 10,
            height: "100%",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#d5d5d5",
              borderRadius: 10,
              height: 150,
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate("tarot-details")}
          >
            <View
              style={{
                height: "100%",
                width: "35%",
                backgroundColor: "#d9d9d9",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            ></View>
            <View
              style={{
                paddingVertical: 10,
                paddingLeft: 10,
                backgroundColor: "black",
                width: "65%",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: "100%",
              }}
            >
              <Text
                style={{ fontWeight: "bold", paddingBottom: 10, color: "#fff" }}
              >
                Love
              </Text>
              <Text style={{ width: 180, color: "#fff" }}>
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
                elit. In porta diam sit amet risus pretium, ut consequat felis
                eleifend.
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#d5d5d5",
              borderRadius: 10,
              height: 150,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "35%",
                backgroundColor: "#d9d9d9",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            ></View>
            <View
              style={{
                paddingVertical: 10,
                paddingLeft: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                Education
              </Text>
              <Text style={{ width: 180 }}>
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
                elit. In porta diam sit amet risus pretium, ut consequat felis
                eleifend.
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#d5d5d5",
              borderRadius: 10,
              height: 150,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "35%",
                backgroundColor: "#d9d9d9",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            ></View>
            <View
              style={{
                paddingVertical: 10,
                paddingLeft: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                Wealth
              </Text>
              <Text style={{ width: 180 }}>
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
                elit. In porta diam sit amet risus pretium, ut consequat felis
                eleifend.
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#d5d5d5",
              borderRadius: 10,
              height: 150,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "35%",
                backgroundColor: "#d9d9d9",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            ></View>
            <View
              style={{
                paddingVertical: 10,
                paddingLeft: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                Health
              </Text>
              <Text style={{ width: 180 }}>
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
                elit. In porta diam sit amet risus pretium, ut consequat felis
                eleifend.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TarotCadres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
