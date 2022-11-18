import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FocusAwareStatusBar from "./FocusAwareStatusBar";
// import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const PageWrapperView = (props) => {
  // const { offline } = useSelector((state) => state);
  const insets = useSafeAreaInsets();
  // const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: props.topSafeArea ? insets.top : 0,
        paddingBottom: props.bottomSafeArea ? insets.bottom || 16 : 0,
        
        backgroundColor: props.dark ? "#d9d9d9" : "#fff",
        ...props.style,
      }}
    >
      <FocusAwareStatusBar
        // barStyle={`${props?.statusBar?.style || "dark"}-content`}
        barStyle = {props.dark ? "dark-content" : "light-content"}
        backgroundColor={
          props?.statusBar?.background ||
          (props.dark ? "#1e1621" : "transparent")
        }
      />
      {props.children}
    </View>
  );
};

export default PageWrapperView;

const styles = StyleSheet.create({});
