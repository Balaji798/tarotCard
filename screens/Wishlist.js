import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { categoricData } from "../data/categoricData";
import { useNavigation } from "@react-navigation/native";
import { imageData } from "../data/categoricData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import PageWrapperView from "../components/PageWrapperView";

const stories = [
  {
    name: "Perfume",
    img: "https://img.loccitane.com/ocms/img/lib/_2013_StaticContent/OCC_4678627ae1a64e8ea33a3b6702fbeb4f.jpg",
    price:"500"
  },
  {
    name: "Statue",
    img: "https://m.media-amazon.com/images/I/71f6-arA5TL._SY450_.jpg",
    price:"800"
  },
  {
    name: "Jewelry",
    img: "https://cdn.shopify.com/s/files/1/0558/3509/9288/files/Mobile_banner_498fc643-ae05-444b-a453-caf3c6750360_1600x.jpg?v=1657979725",
    price:"250"
  },
  {
    name: "Gem Stone",
    img: "https://3.bp.blogspot.com/-y0TXbvMVDoI/WoWTPQCckLI/AAAAAAAAO3I/7QeY_hRxGXYstB90jpqD4Q3qWgsNGt8KACLcBGAs/s1600/How%2Bto%2BDifferentiate%2BBetween%2BNatural%2BAnd%2BSynthetic%2BGemstones%2B%25281%2529.jpg",
    price:"100"
  },
  {
    name: "Tammy Morgan",
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    price:"400"
  },
  {
    name: "Perry Martin",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
    price:"300"
  },
  {
    name: "Violet Adams",
    img: "https://randomuser.me/api/portraits/women/35.jpg",
    price:"700"
  },
  {
    name: "Joann Shelton",
    img: "https://randomuser.me/api/portraits/women/64.jpg",
    price:"300"
  },
];

const Wishlist = () => {
  const navigation = useNavigation();


  return (
    <PageWrapperView topSafeArea dark style={{ flex: 1,paddingHorizontal:15, justifyContent: "space-between", }} statusBar={{ background: '#ffffff' }}>
      <View
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MaterialIcons
          name={"arrow-back-ios"}
          size={25}
          onPress={() => navigation.navigate("ShopScreens")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "35%",
          }}
        >
          <AntDesign name={"search1"} size={28} 
          onPress={() => navigation.navigate("product-search")}/>
          <Ionicons name={"ios-heart-outline"} size={28} 
          onPress={()=>navigation.navigate("wish-list")}
          />
          <MaterialIcons name={"shopping-cart"} size={28} 
          onPress={()=>navigation.navigate("cart")}
          />
        </View>
      </View>
      <Text style={{paddingVertical:10,fontWeight:"bold",fontSize:28}}>Your liked ones</Text>
      <View style={styles.storyView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {stories.map((user) => (
              <TouchableOpacity style={styles.storyHolder}
              onPress={() => navigation.navigate("product-details")}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 5,
                    right: 15,
                    bottom: 0,
                    overflow: "hidden",
                    zIndex: 1,
                    backgroundColor: "#fff",
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <AntDesign name={"heart"} size={20} color={"red"} />
                </View>
                <Image
                  style={[styles.storyUserImage2]}
                  source={{
                    uri: user.img,
                  }}
                />
                <Text
                  style={{
                    width: "100%",
                    paddingVertical: 5,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {user.name}
                </Text>
                <Text
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                {"$"}{user.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </PageWrapperView>
  );
}

export default Wishlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 15,
  },
  storyView: {
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  storyHolder: {
    width: "50%",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  storyUserImage2: {
    height: 210,
    width: "100%",
    borderRadius: 10,
    marginHorizontal: 10,
    resizeMode: "cover",
  },
});
