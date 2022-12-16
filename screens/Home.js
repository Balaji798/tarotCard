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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { setStatusBarStyle } from "expo-status-bar";




import Constants from "expo-constants";
import ApiService from "../services/api/ApiService";
// import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";
import PageWrapperView from "../components/PageWrapperView";
import useConditionWrapper from "../hooks/useConditionWrapper";

//const inProduction = manifest.packagerOpts == null;
// const inProduction = process.env.NODE_ENV === 'production';
// const inExpo = Constants.manifest && Constants.manifest.debuggerHost;
// const inBrowser = typeof document !== 'undefined';
// export const apiDomain =
//   inProduction ? 'mywebsite.com': inExpo ? Constants.manifest.debuggerHost.split(`:`).shift()
//   : inBrowser ? document.location.hostname
//   : 'unknown';

// console.log('apiDomain:', apiDomain);

const Home = () => {

  const [error, setError] = useState("");
  const [bg, setBg] = useState(false);
  const [bgIndex, setBgIndex] = useState(-1);
  const stories = [
    {
      name: "Todays",
      date: "sep 27",
    },
    {
      name: "Weekly",
      date: "sep 27 - oct 1",
    },
    {
      name: "Monthly",
      date: "Sep - Oct",
    },
    {
      name: "Yearly",
      date: "Jan - Dec",
    },
  ];

  const navigation = useNavigation();

  const bgFun = (i) => {
    setBg(true);
    setBgIndex(i);
    setTimeout(() => {
      navigation.navigate("tarot-cadres");
      setBgIndex(-1);
    }, 200);
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return { token };
  };

const token =  getToken();  

console.log(token)

  return (
    <PageWrapperView topSafeArea  style={{ flex: 1 }} statusBar={{ background: '#1e1621' }}>
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
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 28,
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
            
            paddingBottom:100
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Check your horoscope
          </Text>
          <View
            style={[
              styles.storyView,
              {
                paddingVertical: 10,
                
                paddingRight:140
              },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{width:"100%"}}
            >
              {stories.map((user, i) => (
                <TouchableOpacity
                  style={{
                    
                    width: 123,
                    borderWidth: 1.5,
                    borderRadius: 10,
                    paddingLeft: 10,
                    borderColor: bg && bgIndex == i ? "black" : "#1109",
                    backgroundColor: bg && bgIndex == i ? "black" : "#fff",
                    marginRight: 10,
                    paddingVertical:14
                  }}
                  onPress={() => bgFun(i)}
                  key={i}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: bg && bgIndex == i ? "#fff" : "black",
                      lineHeight:16,
                    }}
                  >
                    {user.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: bg && bgIndex == i ? "#fff" : "black",
                      lineHeight:14,
                      marginTop:12
                    }}
                  >
                    {user.date}
                  </Text>
                  <FontAwesome5
                    name={"long-arrow-alt-right"}
                    size={25}
                    color={bg && bgIndex == i ? "#fff" : "black"}
                    style={{marginTop:8}}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </PageWrapperView>
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
    paddingHorizontal:16
  },
  storyView: {
    width: 500,
    paddingVertical: 4,
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
