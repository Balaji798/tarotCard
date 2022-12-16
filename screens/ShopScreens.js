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
import PageWrapperView from "../components/PageWrapperView";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";
import ApiService from "../services/api/ApiService";
import OnBoardingCarousel from "../components/OnBoardingCarousel";

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
    name: "God Statue",
    img: "https://rukminim1.flixcart.com/image/832/832/kmns7m80/showpiece-figurine/f/l/8/tfg-7539-shilpacharya-handicrafts-original-imagfgh6qguppxpw.jpeg?q=70",
  },
];

const WIDTH = Dimensions.get("window").width * 0.9;
const HEIGHT = Dimensions.get("window").height;

const ShopScreens = () => {
  const [wish, setWish] = useState(false);
  const [ind, setInd] = useState(-0);
  const navigation = useNavigation();
  const [pagination, setPagination] = useState(0);

  const chang = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== pagination) {
      setPagination(slide);
    }
  };

  const setWishI = (i) => {
    setInd(i);
    setWish((p) => !p);
    console.log(i);
  };

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: products,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getProduct();
        const products = res.data;
        return products;
      }),
    []
  );

  console.log(products);
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{ paddingBottom: 50, paddingHorizontal: 16 }}
      statusBar={{ background: "#d9d9d9" }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
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
          <AntDesign
            name={"search1"}
            size={28}
            onPress={() => navigation.navigate("product-search")}
          />
          <Ionicons
            name={"ios-heart-outline"}
            size={28}
            onPress={() => navigation.navigate("wish-list")}
          />
          <MaterialIcons
            name={"shopping-cart"}
            size={28}
            onPress={() => navigation.navigate("cart")}
          />
        </View>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{ borderRadius: 10 }}
      >
        <View
          style={{
            borderRadius: 10,
            width: "100%",
            height: 250,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OnBoardingCarousel />
        </View>
        {/* <Carousel data={stories} /> */}
        {/* <View style={{ borderRadius: 10 }}>
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
                width: 100,
                justifyContent: "space-between",
              }}
            >
              {stories.map((i, k) => (
                <View
                  style={{
                    width: pagination === k ? 24 : 6,
                    height: pagination === k ? 6 : 6,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                  }}
                  key={k}
                />
              ))}
            </View>
          </View>
        </View> */}
        <View
          style={[
            styles.storyView,
            {
              paddingVertical: 10,
            },
          ]}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {stories.map((user, i) => (
              <TouchableOpacity
                style={[styles.storyHolder]}
                onPress={() => navigation.navigate("products")}
                key={i}
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

        <Text
          style={{
            paddingTop: 53,
            fontWeight: "bold",
            fontSize: 18,
            paddingBottom: 10,
          }}
        >
          New Arrival
        </Text>
        <View
          style={[
            styles.storyView,
            {
              marginBottom: 50,
            },
          ]}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {products.map((product, index) => (
              <TouchableOpacity
                style={[
                  styles.storyHolder,
                  { width: 128, marginHorizontal: 8, marginLeft: 16 },
                ]}
                key={index}
                onPress={() =>
                  navigation.push("product-details", { product: product })
                }
              >
                <View
                  style={{
                    position: "absolute",
                    top: 5,
                    right: 20,
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
                  {ind === index && wish ? (
                    <AntDesign
                      name={"heart"}
                      size={20}
                      color={"red"}
                      onPress={() => setWishI(index)}
                    />
                  ) : (
                    <Ionicons
                      name={"ios-heart-outline"}
                      size={24}
                      onPress={() => setWishI(index)}
                    />
                  )}
                </View>
                <Image
                  style={[styles.storyUserImage2]}
                  source={{
                    uri: product.images[0],
                  }}
                />
                <Text>{product.category}</Text>
                <Text>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </PageWrapperView>
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
    paddingRight: 28,
    alignItems: "center",
  },
  storyUserImage: {
    height: 64,
    width: 64,
    borderRadius: 100,
  },
  storyUserImage2: {
    height: 210,
    width: 128,
    borderRadius: 10,
  },
});
