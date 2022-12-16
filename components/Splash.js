import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Easing,
  useWindowDimensions,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Card from "./Card";
import { StatusBar } from "expo-status-bar";
//import Breathe from "../components/Breathe";

const width = Dimensions.get("window").width;

const WIDTH = width * 0.7;
const THRU = (width - WIDTH) / 2;
const MARGIN = 10;

const Splash = (props) => {
  const navigation = useNavigation();
  const animation = useState(new Animated.Value(0))[0];
  const CallAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => CallAnimation());
  };
  useEffect(() => {
    CallAnimation();
  }, []);
  const RotateData = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <ImageBackground
      source={require("../assets/giphy.gif")}
      resizeMode="cover"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#1e1621",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <View style={{ width: "100%", paddingHorizontal: 16, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("tarot-cadres")}>
          <MaterialIcons
            name={"arrow-back-ios"}
            size={25}
            color={"#fff"}
            style={{ paddingVertical: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            fontSize: 24,
            width: "100%",
            // paddingHorizontal: 16,
          }}
        >
          Tarot App
        </Text>
      </View>
      <ImageBackground
        source={require("../assets/giphy.gif")}
        resizeMode="cover"
        style={{
          width: 500,
          height: WIDTH * 2.1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Animated.Image
          source={require("../assets/zodiacCNew-removebg-preview.png")}
          resizeMode="cover"
          style={{
            width: WIDTH * 1.2,
            height: WIDTH * 1.2,
            transform: [{ rotate: RotateData }],
            position: "absolute",
          }}
        />
      </ImageBackground>
      <Card
        isFlip={props.isFlip}
        setIsFlip={props.setIsFlip}
        setFaded={props.setFaded}
        fadedIn={props.fadedIn}
      />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  hidden: {
    backfaceVisibility: "hidden",
  },
  back: {
    position: "absolute",
    top: 10,
    left: 50,
    right: 0,
  },
});
