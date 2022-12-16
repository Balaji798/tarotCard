import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { MyText } from "./MyDesign";


const windowWidth = Dimensions.get("window").width;

const Options = ({ value, setValue, options, ...props }) => {
	console.log(setValue)
  const optionCount = options?.length;
  return (
    <View>
      {props.title && (
        <View style={{ marginBottom: 10 }}>
          <MyText
            style={{
              fontSize: "smd",
              color: props.error ? "rgba(201,23,19,0.9)" : "#747474",
            }}
          >
            {props.title}
          </MyText>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          width: windowWidth - 32,
          position: "relative",
          ...props.style,
        }}
      >
        {options?.map((option, idx) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => {
              console.log(option.value);
              setValue(option.value);
            }}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",

              width: (windowWidth - 32) / optionCount,

              height: 48,
              paddingVertical: 10,

              backgroundColor:
                value === option.value ? "#2D9140" : "transparent",

              borderWidth: 1,
              borderColor: value !== option.value ? "#D1D1D1" : "#2D9140",
              borderTopLeftRadius: idx === 0 ? 5 : 0,
              borderBottomLeftRadius: idx === 0 ? 5 : 0,
              borderTopRightRadius: idx === optionCount - 1 ? 5 : 0,
              borderBottomRightRadius: idx === optionCount - 1 ? 5 : 0,
              borderRightWidth: idx === optionCount - 1 ? 1 : 0,
              // borderLeftWidth: idx === 0 ? 1 : 0,
            }}
          >
            <MyText
              style={{
                color: value === option.value ? "white" : "#181818",
                fontSize: "mlg",
              }}
            >
              {option.label || ""}
            </MyText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({});
