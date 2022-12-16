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
    price: "500",
  },
  {
    name: "Statue",
    img: "https://m.media-amazon.com/images/I/71f6-arA5TL._SY450_.jpg",
    price: "800",
  },
  {
    name: "Jewelry",
    img: "https://cdn.shopify.com/s/files/1/0558/3509/9288/files/Mobile_banner_498fc643-ae05-444b-a453-caf3c6750360_1600x.jpg?v=1657979725",
    price: "250",
  },
  {
    name: "Gem Stone",
    img: "https://3.bp.blogspot.com/-y0TXbvMVDoI/WoWTPQCckLI/AAAAAAAAO3I/7QeY_hRxGXYstB90jpqD4Q3qWgsNGt8KACLcBGAs/s1600/How%2Bto%2BDifferentiate%2BBetween%2BNatural%2BAnd%2BSynthetic%2BGemstones%2B%25281%2529.jpg",
    price: "100",
  },
  {
    name: "God Statue",
    img: "https://rukminim1.flixcart.com/image/832/832/kmns7m80/showpiece-figurine/f/l/8/tfg-7539-shilpacharya-handicrafts-original-imagfgh6qguppxpw.jpeg?q=70",
  },
];

const Cart = () => {
  const navigation = useNavigation();
  const [bgColor, setBgColor] = useState(false);
  const [quantity, setQuantity] = useState(0);

  let i = 0;

  const increment = () => {
    i++;
    if (quantity >= 0) setQuantity(i);
  };

  const decrement = () => {
    i--;
    if (quantity >= 0) setQuantity(i);
  };

  const setBGColor = () => {
    setBgColor(true);
  };
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: "space-between",
      }}
      statusBar={{ background: "#ffffff" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialIcons
            name={"arrow-back-ios"}
            size={25}
            onPress={() => navigation.navigate("ShopScreens")}
          />
        </View>
        <Text style={{ paddingTop: 10, fontWeight: "bold", fontSize: 28 }}>
          Shopping Cart
        </Text>
        <Text
          style={{
            width: "100%",
            borderBottomWidth: 1,
            marginVertical: 5,
            paddingVertical: 10,
          }}
        >
          2 items
        </Text>
        <View style={styles.storyView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {stories.map((user, i) => (
              <View
                style={styles.storyHolder}
                onPress={() => navigation.navigate("product-details")}
              >
                <Image
                  style={[styles.storyUserImage2]}
                  source={{
                    uri: user.img,
                  }}
                />
                <View style={{ justifyContent: "space-between", padding: 10 }}>
                  <Text
                    style={{
                      width: "100%",
                      paddingVertical: 5,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {user.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: 180,

                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          width: "100%",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        {"$"}
                        {user.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: 86,
                        justifyContent: "space-between",
                        backgroundColor: "#d9d9d9",
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                      }}
                    >
                      <AntDesign name={"minus"} size={20} onPress={decrement} />
                      <Text style={{ fontSize: 20 }}>{quantity}</Text>
                      <AntDesign name={"plus"} size={20} onPress={increment} />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            width: "100%",
            borderTopWidth: 1,
            marginVertical: 10,
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Sub Total</Text>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{"$"} 2000.00</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </PageWrapperView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  storyView: {
    marginTop: 4,
    height: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  storyHolder: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
  },
  storyUserImage2: {
    height: 200,
    width: "40%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: "cover",
  },
});
