import {
  StyleSheet,
  Text,
  FlatList,
  Animated,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import PageWrapperView from "../components/PageWrapperView";
import { useRef } from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useSharedValue } from "react-native-reanimated";
import { useTransition } from "react";
import {
  Gesture,
  ScrollView,
  FlingGestureHandler,
} from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CONTENDER = width * 0.45;
const MARGIN = (width - CONTENDER) / 2;
const ESPARTO = 10;

const SplashScreen = () => {
  const [isFlip, setIsFlip] = useState(false);
  const [index1, setIndex] = useState(-1);
  const navigation = useNavigation();
  const [position, setPosition] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollZ = useRef(new Animated.Value(0)).current;
  // setTimeout(()=>{
  //   navigation.navigate("tarot-details")
  // },100)
  const animated = useRef(new Animated.Value(0));
  const cards = [
    {
      source: require("../assets/tarot/chariot.png"),
      source2: require("../assets/tarotBack/back-tarot1.png"),
    },
    {
      source: require("../assets/tarot/death.png"),
      source2: require("../assets/tarotBack/back-tarot2.png"),
    },
    {
      source: require("../assets/tarot/devil.png"),
      source2: require("../assets/tarotBack/back-tarot3.png"),
    },
    {
      source: require("../assets/tarot/fool.png"),
      source2: require("../assets/tarotBack/back-tarot4.png"),
    },
    {
      source: require("../assets/tarot/hermit.png"),
      source2: require("../assets/tarotBack/back-tarot5.png"),
    },
    {
      source: require("../assets/tarot/high-priestess.png"),
      source2: require("../assets/tarotBack/back-tarot6.png"),
    },
    {
      source: require("../assets/tarot/judegment.png"),
      source2: require("../assets/tarotBack/back-tarot7.png"),
    },
    {
      source: require("../assets/tarot/justice.png"),
      source2: require("../assets/tarotBack/back-tarot8.png"),
    },
    {
      source: require("../assets/tarot/lover.png"),
      source2: require("../assets/tarotBack/back-tarot9.png"),
    },
    {
      source: require("../assets/tarot/moon.png"),
      source2: require("../assets/tarotBack/back-tarot10.png"),
    },
    {
      source: require("../assets/tarot/pendu.png"),
      source2: require("../assets/tarotBack/back-tarot11.png"),
    },
    {
      source: require("../assets/tarot/strength.png"),
      source2: require("../assets/tarotBack/back-tarot12.png"),
    },
    {
      source: require("../assets/tarot/sun.png"),
      source2: require("../assets/tarotBack/back-tarot21.png"),
    },
    {
      source: require("../assets/tarot/temperance.png"),
      source2: require("../assets/tarotBack/back-tarot14.png"),
    },
    {
      source: require("../assets/tarot/tower.png"),
      source2: require("../assets/tarotBack/back-tarot15.png"),
    },
    {
      source: require("../assets/tarot/wheel.png"),
      source2: require("../assets/tarotBack/back-tarot16.png"),
    },
    {
      source: require("../assets/tarot/world.png"),
      source2: require("../assets/tarotBack/back-tarot17.png"),
    },
    {
      source: require("../assets/tarot/pendu.png"),
      source2: require("../assets/tarotBack/back-tarot18.png"),
    },
    {
      source: require("../assets/tarot/strength.png"),
      source2: require("../assets/tarotBack/back-tarot19.png"),
    },
    {
      source: require("../assets/tarot/sun.png"),
      source2: require("../assets/tarotBack/back-tarot20.png"),
    },
    {
      source: require("../assets/tarot/temperance.png"),
      source2: require("../assets/tarotBack/back-tarot21.png"),
    },
    {
      source: require("../assets/tarot/tower.png"),
      source2: require("../assets/tarotBack/back-tarot22.png"),
    },
    {
      source: require("../assets/tarot/wheel.png"),
      source2: require("../assets/tarotBack/back-tarot23.png"),
    },
    {
      source: require("../assets/tarot/world.png"),
      source2: require("../assets/tarotBack/back-tarot24.png"),
    },
  ];

  const [card2, setCard2] = useState(cards);

  const interpolateFront = animated.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const interpolateBack = animated.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const yTranslation = useSharedValue(30);
  const gesture = Gesture.Pan()
    .onBegin(({ translationY }) => {
      yTranslation.Value = translationY;
    })
    .onUpdate(({ translationY }) => {
      yTranslation.Value = translationY;
    });
  const handelFlip = (i) => {
    console.log(i);
    setIndex(i);
    gesture;
    Animated.spring(animated.current, {
      duration: 500,
      toValue: isFlip ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlip(!isFlip);
    });
    // setTimeout(() => {
    //   navigation.push("tarot-details");
    // }, 1000);

    // if (i == index1 && isFlip) {
    //   card2.splice(i, 1);

    //   setCard2(card2);
    // }
  };

  //const rotateZ = useSharedValue(Math.random()*20-10)

  console.log(gesture);
  return (
    <PageWrapperView
      topSafeArea
      style={{ flex: 1, backgroundColor: "#1e1621" }}
      statusBar={{ background: "#1e1621" }}
    >
      <View style={{ width: "100%", paddingHorizontal: 16 }}>
        <MaterialIcons
          name={"arrow-back-ios"}
          size={25}
          color={"#fff"}
          style={{ paddingVertical: 10 }}
          onPress={() => navigation.goBack()}
        />
      </View>

      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          width: "100%",
          paddingHorizontal: 16,
        }}
      >
        Tarot Cards
      </Text>
      {/*  <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 400,
          
          paddingHorizontal: 100,
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

          const outputRange = [0, -25, 0];

          const inputRange2 = [
            (index - 1) * CONTENDER,
            index * CONTENDER,
            (index + 1) * CONTENDER,
          ];

          const outputRange2 = [10, 10, 10];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          const translateX = scrollX.interpolate({
            inputRange:inputRange2,
            outputRange:outputRange2,
          });

          const handelFlip = (i) => {
            setIndex(i);
            Animated.timing(animated.current, {
              duration: 800,
              toValue: isFlip ? 0 : 180,
              useNativeDriver: true,
            }).start(() => {
               setIsFlip(!isFlip);
            });
            // setTimeout(()=>{
            //    navigation.push("tarot-details")
            //    },1000)
          };

          const interpolateFront = animated.current.interpolate({
            inputRange: [0, 180],
            outputRange: ["0deg", "-180deg"],
          });

          const interpolateBack = animated.current.interpolate({
            inputRange: [0, 180],
            outputRange: ["180deg", "360deg"],
          });

          const range =[
            (index - 1)*CONTENDER,
            index * CONTENDER,
            (index + 1) * CONTENDER,
          ]

          const output = ["20deg","0deg","25deg"]

          const rotateZ = scrollZ.interpolate({
            inputRange:range,
            outputRange:output
          });
          console.log(rotateZ)
          return (
            <View style={{ width: CONTENDER }} key={index}>
              <Animated.View
                style={[
                  styles.hidden,
                  {
                    marginHorizontal: ESPARTO,
                    padding: 5,
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [
                      { translateY },
                      { rotateY: index===index1 ? interpolateFront:"0deg" },  
                      {translateX},
                      //{rotateZ:rotateZ}
                    ],
                    height: CONTENDER * 1.75,
                  },
                ]}
                key={index}
              >
                <TouchableOpacity
                  style={{ width: "100%", height: CONTENDER * 1.7 }}
                  onPress={() =>  handelFlip(index)}
                >
                  <Image
                    source={require("../assets/tarotBackCard.png")}
                    style={styles.posterImage}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View
                style={[
                  styles.back,
                  {
                    marginTop:-340,
                    marginHorizontal: ESPARTO,
                    width:CONTENDER+55,
                    height: CONTENDER*2.05,
                    padding: 5,
                    borderRadius: 24,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [
                      
                      { translateY }, 
                      { rotateY: index===index1 ? "360deg":"180deg" },
                      {translateX},
                  ],
                  },
                  styles.hidden,
                ]}
              >
                <TouchableOpacity
                  style={{ width: "100%", height: CONTENDER * 1.7 }}
                  onPress={() => handelFlip(index)}
                >
                  <Image
                   // source={require("../assets/tarotCard3-3.jpg")}
                   source={item.source}
                    resizeMode="cover"
                    style={styles.posterImage2}
                  />
                </TouchableOpacity>
              </Animated.View>
            </View>
          );
        }}
      /> */}
      {/* <View
        style={{
          width: "100%",
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: 200, height: 300, backgroundColor: "#fff" }}>
          <Image
            source={index1 >= 0 ? cards[index1].source : ""}
            resizeMode="cover"
            style={{ width: "100%", height: 300, borderRadius: 5 }}
          />
        </View>
      </View> */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 50,
        }}
      >
        <TouchableOpacity
          style={[
            styles.hidden,
            {
              width: 150,
              height: 200,
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 5,
              transform: [{ rotateY: isFlip ? "360deg" : "180deg" }],
            },
          ]}
          onPress={() => navigation.push("tarot-details")}
        >
          <Image
            source={cards[0].source}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            height: "100%",
            marginTop: 20,
          }}
        >
          {cards.map((item, index) => (
            <View>
              <Animated.View
                style={[
                  styles.hidden,
                  styles.card,
                  {
                    transform: [
                      { translateY: isFlip && index === index1 ? -210 : 0 },
                      {
                        rotateY:
                          isFlip === false && index === index1
                            ? interpolateFront
                            : "0deg",
                      },
                      //   // {translateX},
                      //   // {rotateY:rotateZ}
                    ],
                  },
                ]}
              >
                <TouchableOpacity
                  style={{ width: "100%", height: "100%", borderRadius: 5 }}
                  onPress={() => handelFlip(index)}
                >
                  <Image
                    source={item.source2}
                    style={{ width: "100%", height: "100%", borderRadius: 5 }}
                  />
                </TouchableOpacity>
              </Animated.View>
              {/* <Animated.View
                style={[
                  styles.back,
                  isFlip && index === index1 ? styles.toUp : styles.card,
                  {
                    height: 228,
                    transform: [
                      { translateY: isFlip && index === index1 ? -240 : 0 },
                      {
                        rotateY:
                          isFlip && index === index1
                            ? interpolateBack
                            : "180deg",
                      },
                    ],
                  },
                  styles.hidden,
                ]}
              >
                <TouchableOpacity
                  style={{ width: "100%", height: 224, borderRadius: 5 }}
                  onPress={() => handelFlip(index)}
                >
                  <Image
                    source={item.source}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 5 }}
                  />
                </TouchableOpacity>
              </Animated.View> */}
            </View>
          ))}
        </View>
      </ScrollView>
    </PageWrapperView>
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
    borderRadius: 10,
  },
  posterImage2: {
    width: CONTENDER + 50,
    height: CONTENDER * 2,
    resizeMode: "cover",
    borderRadius: 24,
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
  back: {
    position: "absolute",
    top: 10,
    left: 50,
    right: 0,
  },
  toUp: {
    position: "absolute",
    //marginTop:-250,
    right: 0,
    //top: -450,
    left: -17,
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 3,
    borderRadius: 5,
    zIndex: 1000,
  },
  card: {
    width: 53,
    height: 100,
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 3,
    borderRadius: 5,
  },
});

// import {
//   StyleSheet,
//   Text,
//   FlatList,
//   View,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   LayoutAnimation,
// } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import PageWrapperView from "../components/PageWrapperView";
// import { useRef } from "react";
// import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";
// import { useTransition } from "react";
// import {
//   Gesture,
//   ScrollView,
//   FlingGestureHandler,
// } from "react-native-gesture-handler";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

// const CONTENDER = width * 0.45;
// const MARGIN = (width - CONTENDER) / 2;
// const ESPARTO = 10;

// const SplashScreen = () => {
//    const [isFlip, setIsFlip] = useState(false);
//   // const [flip, setFlip] = useState(false);
//   // const [index1, setIndex] = useState(-1);
//   const navigation = useNavigation();

//   // const scrollX = useRef(new Animated.Value(0)).current;
//   // const scrollZ = useRef(new Animated.Value(0)).current;
//   const opacity = useRef(new Animated.Value(0)).current;

//   // setTimeout(()=>{
//   //   navigation.navigate("tarot-details")
//   // },100)
//   const animated = useRef(new Animated.Value(0));
//   const cards = [
//     {
//       source: require("../assets/tarot/chariot.png"),
//       source2: require("../assets/tarotBack/back-tarot1.png"),
//     },
//     {
//       source: require("../assets/tarot/death.png"),
//       source2: require("../assets/tarotBack/back-tarot2.png"),
//     },
//     {
//       source: require("../assets/tarot/devil.png"),
//       source2: require("../assets/tarotBack/back-tarot3.png"),
//     },
//     {
//       source: require("../assets/tarot/fool.png"),
//       source2: require("../assets/tarotBack/back-tarot4.png"),
//     },
//     {
//       source: require("../assets/tarot/hermit.png"),
//       source2: require("../assets/tarotBack/back-tarot5.png"),
//     },
//     {
//       source: require("../assets/tarot/high-priestess.png"),
//       source2: require("../assets/tarotBack/back-tarot6.png"),
//     },
//     {
//       source: require("../assets/tarot/judegment.png"),
//       source2: require("../assets/tarotBack/back-tarot7.png"),
//     },
//     {
//       source: require("../assets/tarot/justice.png"),
//       source2: require("../assets/tarotBack/back-tarot8.png"),
//     },
//     {
//       source: require("../assets/tarot/lover.png"),
//       source2: require("../assets/tarotBack/back-tarot9.png"),
//     },
//     {
//       source: require("../assets/tarot/moon.png"),
//       source2: require("../assets/tarotBack/back-tarot10.png"),
//     },
//     {
//       source: require("../assets/tarot/pendu.png"),
//       source2: require("../assets/tarotBack/back-tarot11.png"),
//     },
//     {
//       source: require("../assets/tarot/strength.png"),
//       source2: require("../assets/tarotBack/back-tarot12.png"),
//     },
//     {
//       source: require("../assets/tarot/sun.png"),
//       source2: require("../assets/tarotBack/back-tarot21.png"),
//     },
//     {
//       source: require("../assets/tarot/temperance.png"),
//       source2: require("../assets/tarotBack/back-tarot14.png"),
//     },
//     {
//       source: require("../assets/tarot/tower.png"),
//       source2: require("../assets/tarotBack/back-tarot15.png"),
//     },
//     {
//       source: require("../assets/tarot/wheel.png"),
//       source2: require("../assets/tarotBack/back-tarot16.png"),
//     },
//     {
//       source: require("../assets/tarot/world.png"),
//       source2: require("../assets/tarotBack/back-tarot17.png"),
//     },
//     {
//       source: require("../assets/tarot/pendu.png"),
//       source2: require("../assets/tarotBack/back-tarot18.png"),
//     },
//     {
//       source: require("../assets/tarot/strength.png"),
//       source2: require("../assets/tarotBack/back-tarot19.png"),
//     },
//     {
//       source: require("../assets/tarot/sun.png"),
//       source2: require("../assets/tarotBack/back-tarot20.png"),
//     },
//     {
//       source: require("../assets/tarot/temperance.png"),
//       source2: require("../assets/tarotBack/back-tarot21.png"),
//     },
//     {
//       source: require("../assets/tarot/tower.png"),
//       source2: require("../assets/tarotBack/back-tarot22.png"),
//     },
//     {
//       source: require("../assets/tarot/wheel.png"),
//       source2: require("../assets/tarotBack/back-tarot23.png"),
//     },
//     {
//       source: require("../assets/tarot/world.png"),
//       source2: require("../assets/tarotBack/back-tarot24.png"),
//     },
//   ];

//   // const [card2, setCard2] = useState(cards);

//   const interpolateFront = animated.current.interpolate({
//     inputRange: [0, 180],
//     outputRange: ["0deg", "180deg"],
//   });

//   const interpolateBack = animated.current.interpolate({
//     inputRange: [0, 180],
//     outputRange: ["180deg", "360deg"],
//   });

//   const [flip, setFlip] = useState(false);
//   const [position, setPosition] = useState(0);
//   const translateX = useSharedValue(0);

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateY: -translateX.value }],
//   }));

//   const onPress = (index) => {
//     setFlip(!flip);
//     setPosition(index);
//     // (translateX.value = withTiming(
//     //   translateX.value < width / 2 ? width - 100 : 0
//     // ));}
//     // Animated.timing(animated.current, {
//     //   duration: 500,
//     //   toValue: isFlip ? 0 : 180,
//     //   useNativeDriver: true,
//     // }).start(() => {
//     //   setIsFlip(!isFlip);
//     // });
//   };

//   return (
//     <PageWrapperView
//       topSafeArea
//       style={{ flex: 1, backgroundColor: "#1e1621" }}
//       statusBar={{ background: "#1e1621" }}
//     >
//       <View style={{ width: "100%", paddingHorizontal: 16 }}>
//         <MaterialIcons
//           name={"arrow-back-ios"}
//           size={25}
//           color={"#fff"}
//           style={{ paddingVertical: 10 }}
//           onPress={() => navigation.goBack()}
//         />
//       </View>

//       <Text
//         style={{
//           color: "#fff",
//           fontSize: 24,
//           width: "100%",
//           paddingHorizontal: 16,
//         }}
//       >
//         Tarot Cards
//       </Text>
//       {/* <Animated.FlatList
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true }
//         )}
//         data={cards}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingTop: 400,

//           paddingHorizontal: 100,
//         }}
//         decelerationRate={0}
//         snapToInterval={CONTENDER}
//         scrollEventThrottle={16}
//         keyExtractor={(item) => item}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             (index - 1) * CONTENDER,
//             index * CONTENDER,
//             (index + 1) * CONTENDER,
//           ];

//           const outputRange = [0, -25, 0];

//           const inputRange2 = [
//             (index - 1) * CONTENDER,
//             index * CONTENDER,
//             (index + 1) * CONTENDER,
//           ];

//           const outputRange2 = [10, 10, 10];

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange,
//           });

//           const translateX = scrollX.interpolate({
//             inputRange: inputRange2,
//             outputRange: outputRange2,
//           });

//           const handelFlip = (i) => {
//             //LayoutAnimation.easeInEaseOut();
//             setFlip(!flip);
//             setIndex(i);
//             Animated.timing(animated.current, {
//               duration: 500,
//               toValue: isFlip ? 0 : 180,
//               useNativeDriver: true,
//             }).start(() => {
//               setIsFlip(!isFlip);
//             });

//             // Animated.spring(opacity,{
//             //   toValue:flip === true ? 0:1,
//             //   useNativeDriver:true,
//             // }).start();
//             // setTimeout(()=>{
//             //    navigation.push("tarot-details")
//             //    },1000)
//           };

//           const interpolateFront = animated.current.interpolate({
//             inputRange: [0, 180],
//             outputRange: ["0deg", "-180deg"],
//           });

//           const interpolateBack = animated.current.interpolate({
//             inputRange: [0, 180],
//             outputRange: ["180deg", "360deg"],
//           });

//           const range = [
//             (index - 1) * CONTENDER,
//             index * CONTENDER,
//             (index + 1) * CONTENDER,
//           ];

//           const output = ["20deg", "0deg", "25deg"];

//           const rotateZ = scrollZ.interpolate({
//             inputRange: range,
//             outputRange: output,
//           });
//           console.log(rotateZ);
//           return (
//             <View style={{ width: CONTENDER }}>
//               <Animated.View
//                 style={[
//                   styles.hidden,
//                   {
//                     marginHorizontal: ESPARTO,
//                     padding: 5,
//                     opacity:flip?1:0,
//                     borderRadius: 15,
//                     backgroundColor: "#fff",
//                     alignItems: "center",
//                     transform: [
//                       { translateY },
//                       { rotateY: index === index1 ? interpolateFront : "0deg" },
//                       { translateX },
//                       //{rotateZ:rotateZ}
//                     ],
//                     height: CONTENDER * 1.75,
//                   },
//                 ]}
//                 key={item.source}
//               >
//                 <TouchableOpacity
//                   style={{ width: "100%", height: CONTENDER * 1.7 }}
//                   onPress={() => handelFlip(index)}
//                 >
//                   <Image source={item.source2} style={styles.posterImage} />
//                 </TouchableOpacity>
//               </Animated.View>
//             </View>
//           );
//         }}
//       />
//       {isFlip ? (
//         <Animated.View
//           style={[
//             styles.back,
//             {
//               marginTop: 100,
//               marginLeft: 25,
//               //marginHorizontal: ESPARTO,
//               width: CONTENDER + 170,
//               height: CONTENDER * 3.3,
//               padding: 5,
//               borderRadius: 24,
//               backgroundColor: "#fff",
//               alignItems: "center",
//             },
//             styles.hidden,
//           ]}
//         >
//           <TouchableOpacity
//             style={{ width: "100%", height: CONTENDER * 2 }}
//             onPress={() => navigation.push("tarot-details")}
//           >
//             <Image
//               // source={require("../assets/tarotCard3-3.jpg")}
//               source={cards[0].source}
//               resizeMode="cover"
//               style={styles.posterImage2}
//             />
//             <Text style={{ fontSize: 16, paddingTop: 10 }}>
//               {" "}
//               Lorem IpsumLorem ipsum dolor sit amet, consectetur adipiscing
//               elit. In porta diam sit amet risus pretium, ut consequat felis
//               eleifend. Donec sapien est, malesuada quis dapibus in, condimentum
//               a quam. Morbi justo nisi, malesuada vel nulla eu, semper ornare
//               risus.
//             </Text>
//           </TouchableOpacity>
//         </Animated.View>
//       ) : (
//         ""
//       )} */}
//       <View
//         style={{
//           flexDirection: "row",
//           flexWrap: "wrap",
//           width: "100%",
//           top: 280,
//           paddingLeft: 15,
//         }}
//       >
//         {cards.map((item, index) => (
//           <View>
//           <Animated.View
//             style={{
//               marginTop: index === position && flip ? -220 : 0,
//               transform:[
//                 {rotateY:index === position && flip ? "180deg":"0deg"}
//               ]
//             }}
//             key={index}
//           >
//             <TouchableOpacity
//               style={[
//                 {
//                   width: index === position && flip ? 100 : 50,
//                   height: index === position && flip ? 200 : 100,
//                   backgroundColor: "#fff",
//                   margin: 5,
//                   borderRadius: 5,
//                   padding: 2,
//                 },
//               ]}
//               onPress={() => onPress(index)}
//             >
//               <Image
//                 source={item.source2}
//                 resizeMode="cover"
//                 style={{ width: "100%", height: "100%", borderRadius: 5 }}
//               />
//             </TouchableOpacity>
//           </Animated.View>
//           </View>
//         ))}
//       </View>
//     </PageWrapperView>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1e1621",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#1e1621",
//   },
//   posterImage: {
//     width: "100%",
//     height: CONTENDER * 1.7,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   posterImage2: {
//     width: CONTENDER + 160,
//     height: CONTENDER * 2,
//     borderRadius: 24,
//   },
//   hidden: {
//     backfaceVisibility: "hidden",
//   },
//   back: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//   },
//   card: {
//     width: 53,
//     height: 100,
//     backgroundColor: "#fff",
//     marginVertical: 5,
//     padding: 3,
//     borderRadius: 5,
//   },
// });
