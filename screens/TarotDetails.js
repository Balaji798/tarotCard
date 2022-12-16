import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
  Animated
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React, { useState,useRef } from "react";
import PageWrapperView from "../components/PageWrapperView";
import Splash from "../components/Splash";

const TarotDetails = () => {
  const navigation = useNavigation();
  const [isFlip, setIsFlip] = useState(false);
  const [faded,setFaded]= useState(false);
  const opacity = useRef(new Animated.Value(0)).current

  const fadedIn = ()=>{
    Animated.timing(opacity,{
      toValue:1,
      duration:3000,
      useNativeDriver:true
    }).start();
  }
  return (
    <>
      {faded ? (
        <PageWrapperView
          topSafeArea
          style={{ flex: 1, }}
          statusBar={{ background: "transparent" }}
        >
          <Animated.View style={{opacity}}>
          <ScrollView
            style={{ backgroundColor: "transparent" }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Animated.View style={[styles.bigCircle,]}/>
            <View style={{ marginTop: 15, paddingHorizontal: 16 }}>
              <MaterialIcons
                name={"arrow-back-ios"}
                size={25}
                style={{ paddingBottom: 10, color: "#fff" }}
                onPress={() => navigation.navigate("tarot-cadres")}
              />
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
                Tarot Card Name
              </Text>
            </View>

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
                  marginBottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Image
                  source={cover}
                  resizeMode="cover"
                  style={{ width: "100%", height: 199, borderRadius: 10 }}
                /> */}
              </View>
            </View>
            <View style={{ paddingHorizontal: 16, paddingBottom: 50 }}>
              <Text style={{ marginTop: 20, fontSize: 16 }}>
                {" "}
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
                elit. In porta diam sit amet risus pretium, ut consequat felis
                eleifend. Donec sapien est, malesuada quis dapibus in,
                condimentum a quam. Morbi justo nisi, malesuada vel nulla eu,
                semper ornare risus.
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
                Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
                elit. In porta diam sit amet risus pretium, ut consequat felis
                eleifend. Donec sapien est, malesuada quis dapibus in,
                condimentum a quam. Morbi justo nisi, malesuada vel nulla eu,
                semper ornare risus. Fusce commodo, sem ac hendrerit placerat,
                ante dui bibendum nisl, ut scelerisque diam lectus id sem.
                Integer id maximus lorem, eget efficitur sapien. Integer aliquet
                urna id sapien laoreet molestie.{" "}
              </Text>
            </View>
          </ScrollView>
          </Animated.View>
        </PageWrapperView>
      ) : (
        <Splash isFlip={isFlip} setIsFlip={setIsFlip} setFaded={setFaded} fadedIn={fadedIn}/>
      )}
    </>
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
    top: Platform.OS === "ios" ? -184 : -220,

    // left: Dimensions.get("window").width * -0.04,
    left: -31,
    // width: Dimensions.get("window").width * 1.07,
    // height: Dimensions.get("window").width * 1.1,
    width: 475,
    height: 453,
  },
});
