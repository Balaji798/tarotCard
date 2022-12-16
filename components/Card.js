// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Image,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Animated,
//   FlatList,
// } from "react-native";
// import { cardData } from "../data/CardData";
// import { useNavigation } from "@react-navigation/native";
// import React, { useRef, useState } from "react";

// const width = Dimensions.get("screen").width;

// const WIDTH = width * 0.25;
// const ESPARTO = (width - WIDTH) / 2;
// const MARGIN = 5;

// const Card = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const animate = useRef(new Animated.Value(0));
//   const [isFlip, setIsFlip] = useState(false);
//   const [position, setPosition] = useState(-1);
//   const navigation = useNavigation();
//   return (
//     <>
//       <Animated.FlatList
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true }
//         )}
//         data={cardData}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingTop: Dimensions.get("screen").height * 0.55,
//           marginHorizontal: ESPARTO,
//         }}
//         decelerationRate={0}
//         snapToInterval={WIDTH}
//         scrollEventThrottle={16}
//         keyExtractor={(item) => item}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             (index-2)*WIDTH,
//             (index - 1) * WIDTH,
//             index * WIDTH,
//             (index + 1) * WIDTH,
//             (index+2)*WIDTH
//           ];
//           const outputRange = [30,0, -30, 0,30];

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange,
//           });
//           const up = scrollX.interpolate({
//             inputRange,
//             outputRange: [30,0, -200, 0,30],
//           });
//           const interpolateFront = animate.current.interpolate({
//             inputRange: [0, 180],
//             outputRange: ["0deg", "180deg"],
//           });
//           const interpolateBack = animate.current.interpolate({
//             inputRange: [0, 180],
//             outputRange: ["180deg", "360deg"],
//           });

//           // const opacity = scrollX.interpolate({
//           //   inputRange,
//           //   outputRange: [0,0, 0, 0,0],
//           // });

//           const handelFlip = (index) => {
//              setPosition(index);
//             // Animated.timing(animate.current, {
//             //   duration: 1000,
//             //   toValue: 180,
//             //   useNativeDriver: true,
//             // }).start(setIsFlip(!isFlip));
//             // setTimeout(() => {
//             //   navigation.navigate("tarot-details");
//             // }, 2000);
//           };

//           return (
//             <View style={{ width: WIDTH }}>
//               <Animated.View
//                 style={[
//                   styles.hidden,
//                   {
//                     marginHorizontal: MARGIN,
//                     marginTop:position === index? -300:0,
//                     padding: 2,
//                     borderRadius: 14,
//                    // opacity:isFlip?opacity:1,
//                     backgroundColor:
//                       cardData.length - 3 <= index ? "transparent" : "#fff",
//                     transform: [
//                       { translateY:position === index ? up : translateY },
//                       {
//                         rotateY:
//                         position === index && isFlip
//                         ?
//                         interpolateFront:"0deg",
//                       },
//                     ],
//                   },
//                 ]}
//               >
//                 <TouchableOpacity onPress={() => handelFlip(index)}>
//                   <Image source={item.source2} style={styles.posterImage} />
//                 </TouchableOpacity>
//               </Animated.View>
//               <Animated.View
//                 style={[
//                   styles.hidden,
//                   {
//                     width:300,
//                     marginLeft: -350,
//                     marginTop:-490,
//                     padding: 2,
//                     borderRadius: 14,
//                     backgroundColor:
//                       cardData.length - 1 === index ? "transparent" : "#fff",
//                     transform: [
//                       { translateY: position === index ? up : translateY },
//                       {
//                         rotateY:
//                           position === index && isFlip
//                             ? interpolateBack
//                             : "180deg",
//                       },
//                     ],
//                   },
//                   styles.back,
//                 ]}
//               >
//                 <TouchableOpacity onPress={() => handelFlip(index)}>
//                   <Image source={item.source} style={styles.posterImage2} />
//                 </TouchableOpacity>
//               </Animated.View>
//             </View>
//           );
//         }}
//       />
//     </>
//   );
// };

// export default Card;

// const styles = StyleSheet.create({
//   posterImage: {
//     width: "100%",
//     height: WIDTH * 1.4,
//     resizeMode: "cover",
//     borderRadius: 14,
//     margin: 0,
//     marginBottom: 0,
//   },
//   posterImage2: {
//     width: 300,
//     height: WIDTH * 5.5,
//     resizeMode: "cover",
//     borderRadius: 14,
//     margin: 0,
//     marginBottom: 0,
//   },
//   hidden: {
//     backfaceVisibility: "hidden",
//   },
//   back: {
//     position: "absolute",
//     top: 10,
//     left: 50,
//     right: 0,
//   },
// });

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { cardData } from "../data/CardData";

const width = Dimensions.get("screen").width;

const WIDTH = width * 0.25;
const ESPARTO = (width - WIDTH) / 2;
const MARGIN = 5;

const Card = (props) => {
  const animate = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const animated = useRef(new Animated.Value(0)).current;
  const [position, setPosition] = useState(-1);

  console.log(props.fadedIn)

  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={cardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Dimensions.get("screen").height * 0.55,
          marginHorizontal: ESPARTO,
        }}
        decelerationRate={0}
        snapToInterval={WIDTH}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * WIDTH,
            (index - 1) * WIDTH,
            index * WIDTH,
            (index + 1) * WIDTH,
            (index + 2) * WIDTH,
          ];
          const outputRange = [30, 0, -30, 0, 30];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          const interpolateFront = animated.interpolate({
            inputRange: [0, 180],
            outputRange: ["0deg", "180deg"],
          });

          const interpolateBack = animated.interpolate({
            inputRange: [0, 180],
            outputRange: ["180deg", "360deg"],
          });

          const startAnimation = (index,source) => {
            setPosition(index);
            Animated.timing(animate, {
              toValue: -390,
              duration: 1000,
              useNativeDriver: true,
            }).start();
            Animated.timing(animated, {
              toValue: 180,
              duration: 1500,
              useNativeDriver: true,
            }).start(props.setIsFlip(!props.isFlip));

            setTimeout(() => {
              props.setFaded(true);
              props.fadedIn();
            }, 3000);
            console.log("Hi")
          };
          return (
            <View style={{ width: WIDTH }}>
              <Animated.View
                style={[
                  styles.hidden,
                  {
                    marginHorizontal: MARGIN,
                    backgroundColor:
                      cardData.length - 3 <= index ? "transparent" : "#fff",
                    marginBottom: 20,
                    borderRadius: 7.5,
                    transform: [
                      {
                        translateY: index === position ? animate : translateY,
                      },
                      {
                        rotateY: index === position ? interpolateFront : "0deg",
                      },
                    ],
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => startAnimation(index,item.source)}
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                >
                  <Image
                    source={item.source2}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View
                style={[
                  styles.hidden,
                  {
                    marginHorizontal: MARGIN,
                    marginBottom: 20,
                    borderRadius: 7.5,
                    marginLeft: -48,
                    transform: [
                      {
                        translateY: index === position ? animate : translateY,
                      },
                      {
                        rotateY:
                          index === position ? interpolateBack : "180deg",
                      },
                    ],
                  },
                  styles.back,
                ]}
              >
                <TouchableOpacity
                  onPress={() => startAnimation(index,item.source)}
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                >
                  <Image
                    source={item.source}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  // posterImage: {
  //   width: "100%",
  //   height: WIDTH * 1.4,
  //   resizeMode: "cover",
  //   borderRadius: 14,
  //   margin: 0,
  //   marginBottom: 0,
  // },
  // posterImage2: {
  //   width: 300,
  //   height: WIDTH * 5.5,
  //   resizeMode: "cover",
  //   borderRadius: 14,
  //   margin: 0,
  //   marginBottom: 0,
  // },
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
