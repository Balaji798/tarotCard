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
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import Carousel from "../components/Carousel";

const { width } = Dimensions.get("window");
const height = (width * 100) / 30;

const stories = [
  {
    name: "Perfume",
    img: "https://img.loccitane.com/ocms/img/lib/_2013_StaticContent/OCC_4678627ae1a64e8ea33a3b6702fbeb4f.jpg",
  },
  {
    name: "Statue",
    img: "https://m.media-amazon.com/images/I/71f6-arA5TL._SY450_.jpg",
  },
  {
    name: "Jewelry",
    img: "https://cdn.shopify.com/s/files/1/0558/3509/9288/files/Mobile_banner_498fc643-ae05-444b-a453-caf3c6750360_1600x.jpg?v=1657979725",
  },
  {
    name: "Gem Stone",
    img: "https://3.bp.blogspot.com/-y0TXbvMVDoI/WoWTPQCckLI/AAAAAAAAO3I/7QeY_hRxGXYstB90jpqD4Q3qWgsNGt8KACLcBGAs/s1600/How%2Bto%2BDifferentiate%2BBetween%2BNatural%2BAnd%2BSynthetic%2BGemstones%2B%25281%2529.jpg",
  },
  {
    name: "Tammy Morgan",
    img: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Perry Martin",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Violet Adams",
    img: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    name: "Joann Shelton",
    img: "https://randomuser.me/api/portraits/women/64.jpg",
  },
];

const WIDTH = Dimensions.get("window").width * 0.9;
const HEIGHT = Dimensions.get("window").height;

const ShopScreens = () => {
  const navigation = useNavigation();
  const [pagination, setPagination] = useState(0);

  const chang = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if(slide !== pagination){
      setPagination(slide)
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>Shop Our</Text>
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
      <ScrollView>
        {/* <Carousel data={imageData} /> */}
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={chang}
            showsHorizontalScrollIndicator={false}
            style={{ width, height: 250 }}
          >
            {stories.map((image, index) => (
              <View style={{ paddingHorizontal: 10, width }}>
                <Image
                  key={index}
                  source={{ uri: image.img }}
                  style={{
                    width: "100%",
                    height: 250,
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                />
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              justifyContent: "center",
              width: "100%",
              top: 220,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: 150,
                justifyContent: "space-between",
              }}
            >
              {stories.map((i, k) => (
                <Text
                  style={{
                    width: pagination === k ? 25 : 10,
                    height: 10,
                    borderRadius: 15,
                    backgroundColor: "#fff",
                  }}
                />
              ))}
            </View>
          </View>
        </View>
        <View
          style={[
            styles.storyView,
            {
              paddingVertical: 10,
            },
          ]}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {stories.map((user) => (
              <TouchableOpacity
                style={styles.storyHolder}
                onPress={() => navigation.navigate("products")}
              >
                <Image
                  style={[styles.storyUserImage]}
                  source={{
                    uri: user.img,
                  }}
                />
                <Text style={styles.storyUsernameText}>{user.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={{ padding: 15, fontWeight: "bold", fontSize: 18 }}>
          New Arrival
        </Text>
        <View style={styles.storyView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {stories.map((user) => (
              <View style={styles.storyHolder}>
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
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: 20,
    paddingBottom: 20,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  storyView: {
    paddingVertical: 4,
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  storyHolder: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  storyUserImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  storyUserImage2: {
    height: 210,
    width: 128,
    borderRadius: 10,
  },
});
