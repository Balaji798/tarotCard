import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { introData } from "../data/introData";

const Intro = () => {
  const i = 1;
  const [toggle, setToggle] = useState(0);

  const gotToNext = () => {
    setToggle(i);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>TAROT APP</Text>
      <Image
        source={require("../assets/kali.png")}
        resizeMode="cover"
        style={{
          width: 300,
          height: 280,
        }}
      />
      <View
        style={{
          alignItems: "center",
          paddingLeft:40,
          paddingRight:40,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24,paddingBottom:10 }}>
          {introData[toggle].title}
        </Text>
        <Text style={{ fontSize: 16,textAlign:"center" }}>{introData[toggle].paragraph}</Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>Skip</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 50,
            alignItems: "center",
          }}
        >
          {introData.map((_, i) => (
            <View
              style={{
                backgroundColor: toggle === i ? "#1e1621" : "silver",
                borderRadius: 25,
                width: 10,
                height: 10,
              }}
              key={i}
            ></View>
          ))}
        </View>
          <Text style={{ fontSize: 16 }} onPress={()=> navigation.navigate("Login")}>
            Next
          </Text>

      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
