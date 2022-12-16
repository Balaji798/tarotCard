import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ProductSearch = () => {
  const [wish, setWish] = useState(false);
  const [wish2, setWish2] = useState(false);
  const [ind, setInd] = useState(-1);
  const [newInd,setNewInd] = useState(-1)
  const navigation = useNavigation();

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

  const setWishI = (i) => {
    setInd(i);
    setWish((p) => !p);
  };

  const setWishj = (i)=>{
    setNewInd(i);
    setWish2((p) => !p);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <MaterialIcons
          name={"arrow-back-ios"}
          size={25}
          onPress={() => navigation.navigate("ShopScreens")}
        />
        <TextInput
          placeholder="Search for Products"
          style={{ flex: 1, paddingLeft: 5, fontSize: 16 }}
          onChangeText={() => {}}
        />
      </View>
      <Text style={{ paddingHorizontal: 10 }}>RECENT SEARCHES</Text>
      <View
        style={[
          styles.storyView,
          {
            paddingVertical: 10,
          },
        ]}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map((user, index) => (
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
      <Text style={{ padding: 15, fontWeight: "bold", fontSize: 18,paddingTop:48 }}>
        ITEMS VIEWED
      </Text>
      <View style={styles.storyView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map((user, index) => (
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
                {wish && ind === index ? (
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
      <Text style={{ padding: 15, fontWeight: "bold", fontSize: 18 }}>
        ITEMS WISHLISTED
      </Text>
      <View style={styles.storyView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map((user,index) => (
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
                {wish2 && newInd === index ? (
                  <AntDesign
                    name={"heart"}
                    size={20}
                    color={"red"}
                    onPress={() => setWishj(index)}
                  />
                ) : (
                  <Ionicons
                    name={"ios-heart-outline"}
                    size={24}
                    onPress={() => setWishj(index)}
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
  );
};

export default ProductSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: 0,
    paddingBottom: 20,
  },
  storyView: {
    paddingVertical: 4,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  storyHolder: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  storyUserImage: {
    height: 52,
    width: 52,
    borderRadius: 100,
  },
  storyUserImage2: {
    height: 210,
    width: 128,
    borderRadius: 10,
  },
});
