import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Animated,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { predictionData } from "../data/pridisondata";
import PageWrapperView from "../components/PageWrapperView";

const cardData = [
  {
    title: "Love",
  },
];

const TarotCadres = () => {
  // const animatedValue = React.useRef(new Animated.Value(0)).current
  const navigation = useNavigation();

  // const onPress =()=>{
  //   Animated.timing(animatedValue,{
  //     toValue:1,
  //     duration:3000,
  //     useNativeDriver:false
  //   }).start()
  // }
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{
        paddingHorizontal: 16,
        paddingBottom: 50,
        backgroundColor: "#fff",
      }}
      statusBar={{ background: "#fff" }}
    >
      <MaterialIcons
        name={"arrow-back-ios"}
        size={25}
        style={{ paddingBottom: 10 }}
        onPress={() => navigation.goBack()}
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
          {predictionData.map((item, index) => (
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
              onPress={() => navigation.push("tarot-details")}
              key={index}
            >
              <View
                style={{
                  height: "100%",
                  width: "35%",
                  // backgroundColor: "#d9d9d9",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              >
                <Image
                  source={item.cover}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 10,
                  //backgroundColor: "#1e1621",
                  width: "65%",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  height: "100%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingBottom: 10,
                   // color: "#fff",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ width: 180 }}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </PageWrapperView>
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
