import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
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

const ProductDetails = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [wish, setWish] = useState(false);

  const product = [
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

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",

        paddingTop: 70,
        height: "100%",
        backgroundColor: "#181818",
      }}
    >
      <View
        style={{
          height: "100%",
          backgroundColor: "#fff",
          paddingHorizontal: 16,
          borderToLeftRadius: 18,
          borderTopRightRadius: 18,
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
      </View>
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
              paddingHorizontal: 10,
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
              {wish ? (
                <AntDesign
                  name={"heart"}
                  size={20}
                  color={"red"}
                  onPress={() => setWish((prevState) => !prevState)}
                />
              ) : (
                <Ionicons
                  name={"ios-heart-outline"}
                  size={24}
                  onPress={() => setWish((prevState) => !prevState)}
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
                source={{ uri: product[0].img[imgIndex] }}
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
              {product[0].img.map((item, index) => (
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
              color: "#fff",
              textTransform: "capitalize",
              fontSize: 16,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {product[0].name}
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
            {"$"} {product[0].price}
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
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[850, 0, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </PageWrapperView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
