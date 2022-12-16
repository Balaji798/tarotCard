import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PageWrapperView from "../components/PageWrapperView";
import { useRef } from "react";
import ApiService from "../services/api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";

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

const ProductDetails = (props) => {
  const product = props.route.params.product;
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [wish, setWish] = useState(false);
  const [backDrop, setBackDrop] = React.useState(false);
  const [ind, setInd] = useState([]);
  const apiWrapper = useConditionWrapper();

  const product1 = [
    {
      img: [
        "https://rukminim1.flixcart.com/image/832/832/kmns7m80/showpiece-figurine/f/l/8/tfg-7539-shilpacharya-handicrafts-original-imagfgh6qguppxpw.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/832/832/kmns7m80/showpiece-figurine/k/4/8/tfg-7539-shilpacharya-handicrafts-original-imagfgh6hv39ppmx.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/832/832/kmns7m80/showpiece-figurine/i/i/y/tfg-7539-shilpacharya-handicrafts-original-imagfgh6tf3z4hqc.jpeg?q=70",
      ],
      name: "ganesha Statues",
      price: "500",
    },
  ];
  const setWishI = (i) => {
    setInd(i);
    setWish((p) => !p);
    console.log(ind[i]);
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        borderToLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <ScrollView>
        <View
          style={{
            height: "100%",
            backgroundColor: "#fff",
            paddingHorizontal: 16,
            borderToLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 7,
              width: "100%",
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
          <Text
            style={{
              fontSize: 26,
              paddingTop: 24,
              fontWeight: "bold",
              lineHeight: 26,
            }}
          >
            Product Name
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 19.52,
              paddingTop: 19,
              letterSpacing: 4,
            }}
          >
            {product.description}
          </Text>
          <Text style={{ fontSize: 18, paddingTop: 24, fontWeight: "bold" }}>
            Specification
          </Text>
          <View
            style={{
              paddingTop: 12,
              height: 68,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16 }}>Dimensions</Text>
            <Text style={{ fontSize: 16 }}>Weight</Text>
            <Text style={{ fontSize: 16 }}>Remarks</Text>
          </View>
          <Text style={{ fontSize: 18, paddingTop: 40, fontWeight: "bold" }}>
            SIMILAR PRODUCT
          </Text>
          <View
            style={[
              styles.storyView,
              {
                marginBottom: 50,
              },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {stories.map((user, index) => (
                <View style={styles.storyHolder} key={index}>
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
                    {ind[index] === index ? (
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
                      uri: user.img,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  const [imgIndex, setImgIndex] = useState(0);

  const sheetRef = useRef(null);
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{ flex: 1 }}
      statusBar={{ background: "#adadad" }}
    >
      <View style={{ backgroundColor: "black", flex: 1, height: 791 }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#adadad",
            borderBottomLeftRadius: 18,
            borderBottomRightRadius: 18,
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "10%",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 16,
            }}
          >
            <MaterialIcons
              name={"arrow-back-ios"}
              size={25}
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 35,
                backgroundColor: "#d9d9d9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {product.addToWishList === true ? (
                <AntDesign
                  name={"heart"}
                  size={20}
                  color={"red"}
                  onPress={async () =>
                    apiWrapper(async () => {
                      await ApiService.addToWishList(product._id);
                    })
                  }
                />
              ) : (
                <Ionicons
                  name={"ios-heart-outline"}
                  size={24}
                  onPress={async () =>
                    apiWrapper(async () => {
                      await ApiService.addToWishList(product._id);
                    })
                  }
                />
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "75%",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                source={{ uri: product.images[imgIndex] }}
                style={{ width: 250, height: "100%", resizeMode: "contain" }}
              />
            </View>
            <View
              style={{
                backgroundColor: "#d9d9d9",
                paddingVertical: 10,
                borderRadius: 5,
                paddingHorizontal: 5,
              }}
            >
              {product.images.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ height: "15%", justifyContent: "space-between" }}
                  onPress={() => setImgIndex(index)}
                >
                  <Image
                    source={{ uri: item }}
                    style={{
                      width: 56,
                      height: 54,
                      resizeMode: "contain",
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: "600",
              paddingBottom: 26,
            }}
            onPress={() => sheetRef.current.snapTo(0)}
          >
            Swipe Up for Description
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          height: "15%",
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: "black",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "#818181",
              textTransform: "capitalize",
              fontSize: 16,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {product.product_name}
          </Text>
          <Text
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontSize: 20,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {"$"} {product.price}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            width: 148,
            borderRadius: 10,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={async () =>
            apiWrapper(async () => {
              await ApiService.addToCart(product._id);
            })
          }
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={sheetRef}
        // snapPoints={snapPoints}
        initialSnap={1}
        enabledInnerScrolling={true}
        // callbackNode={bottomSheetValue}
        enabledContentTapInteraction={false}
        enabledGestureInteraction={true}
        onCloseEnd={() => setBackDrop(false)}
        onOpenStart={() => setBackDrop(true)}
        snapPoints={["90%", 0, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </PageWrapperView>
  );
};

export default ProductDetails;

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
