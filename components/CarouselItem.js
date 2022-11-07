import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri:item.uri}}/>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height:height/4,
    backgroundColor:"white",
    margin:10,
    borderRadius:10,
    shadowColor:"#000",
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:5
  },
  image:{
    width:width-20,
    height:height/4,
    borderRadius:10
  }
});
