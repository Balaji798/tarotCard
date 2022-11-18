// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import React, { useEffect } from "react";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from "react-native-reanimated";

// const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// const Description = ({ product }) => {
//   const translationY = useSharedValue(0);

//   const context = useSharedValue({ y: 0 });

//   const gesture = Gesture.Pan()
//     .onStart(() => {
//       context.value = { y: translationY.value };
//     })
//     .onUpdate((event) => {
//       translationY.value = event.translationY + context.value.y;
//       translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + 50);
//     });

//   // const gesture = Gesture.Pan().onUpdate((event)=>{
//   //   translationY.value= event.translationY
//   // });

//   useEffect(() => {
//     translationY.value = withSpring(-SCREEN_HEIGHT / 5);
//   }, []);

//   const rBottomSheetStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translationY.value }],
//     };
//   });

//   return (
//     <GestureDetector gesture={gesture}>
//       <Animated.View
//         style={[
//           styles.bottomSheetContainer,
//           rBottomSheetStyle,
//           { backgroundColor: translationY.value < 0 ? "#fff" : "#fff" },
//         ]}
//       >

//         <View style={styles.line} />
//       </Animated.View>
//     </GestureDetector>
//   );
// };

// export default Description;

// const styles = StyleSheet.create({
//   bottomSheetContainer: {
//     height: SCREEN_HEIGHT,
//     width: "100%",
//     backgroundColor: "#fff",
//     position: "absolute",
//     top: SCREEN_HEIGHT / 1,
//     borderRadius: 25,
//   },
//   line: {
//     width: 75,
//     height: 4,
//     backgroundColor: "grey",
//     alignSelf: "center",
//     borderRadius: 2,
//   },
// });

import { Dimensions, StyleSheet, Text, View, Animated } from "react-native";
import { Portal } from "react-native-paper";
import { useRef, useEffect, useState } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";

const Description = ({ show, onDismiss, children }) => {
  const [open, setOpen] = useState(show);
  const bottomSheetHeight = Dimensions.get("window").height * 0.5;
  const deviseWithe = Dimensions.get("window").width;
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = (event) => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translateY);
    }
  };

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);
  return (
    <Portal>
      <Animated.View
        style={[
          styles.root,
          { height: bottomSheetHeight, bottom: bottom },
          styles.common,
        ]}
      >
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: deviseWithe,
              paddingTop: 7,
            }}
          >
            <View
              style={{
                width: 152,
                height: 6,
                backgroundColor: "#181818",
                borderRadius: 16,
              }}
            />
          </View>
        </PanGestureHandler>
        {children}
      </Animated.View>
    </Portal>
  );
};

export default Description;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  common: {
    shadowColor: "#000",
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
});
