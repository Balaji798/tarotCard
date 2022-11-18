import {
  StyleSheet,
  Text,
  FlatList,
  Animated,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import GestureFlipView from "react-native-gesture-flip-card";
import PageWrapperView from "../components/PageWrapperView";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CONTENDER = width * 0.7;
const MARGIN = (width - CONTENDER) / 2;
const ESPARTO = 10;

const SplashScreen = () => {
  const navigation = useNavigation();

  const scrollX = React.useRef(new Animated.Value(0)).current;
  // setTimeout(()=>{
  //   navigation.navigate("tarot-details")
  // },100)
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SafeAreaView topSafeArea style={styles.container}>
      {/* <MaterialIcons
        name={"arrow-back-ios"}
        size={25}
        color={"#fff"}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={{ color: "#fff", fontSize: 24 }}>Tarot Cards</Text> */}
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 200,
          marginHorizontal: MARGIN,
          paddingRight: 150,
        }}
        decelerationRate={0}
        snapToInterval={CONTENDER}
        scrollEventThrottle={16}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * CONTENDER,
            index * CONTENDER,
            (index + 1) * CONTENDER,
          ];

          const outputRange = [0, -50, 0];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          const renderFront = () => {
            return (
              <View>
                <Image
                  source={require("../assets/tarotCard3-3.jpg")}
                  resizeMode="cover"
                  style={styles.posterImage}
                />
              </View>
            );
          };

          const renderBack = () => {
            return (
              <View>
                <Image
                  source={require("../assets/tarotBackCard.png")}
                  resizeMode="cover"
                  style={styles.posterImage}
                />
              </View>
            );
          };
          return (
            <View style={{ width: CONTENDER }}>
              <Animated.View
                style={{
                  marginHorizontal: ESPARTO,
                  padding: 5,
                  borderRadius: 24,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  transform: [{ translateY }],
                }}
              >
                <Image
                  source={require("../assets/tarotBackCard.png")}
                  resizeMode="cover"
                  style={styles.posterImage}
                />
                {/* <GestureFlipView width={300} height={500}>
                  {renderBack()}
                  {renderFront()}
                </GestureFlipView> */}
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1621",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1621",
  },
  posterImage: {
    width: "100%",
    height: CONTENDER * 1.7,
    resizeMode: "cover",
    borderRadius: 24,
  },
});
