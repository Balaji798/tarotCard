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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProductDetails = () => {
    const navigation = useNavigation();
    
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

  const [imgIndex, setImgIndex] = useState(0);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#adadad" />
      <View
        style={{
          height: "80%",
          width: "100%",
          backgroundColor: "#adadad",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          alignItems: "center",
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
            onPress={() => navigation.navigate("products")}
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
            <Ionicons name={"ios-heart-outline"} size={24} />
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
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 20,
          height: 130,
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
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
