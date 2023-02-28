import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TouchableRipple } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
// import { useDispatch, useSelector } from 'react-redux';
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import PageWrapperView from "../components/PageWrapperView";
import LocationMenuBar from "../components/LocationMenuBar";
import { MyText } from "../components/MyDesign";

// import { logout } from "../state/actions/authActions";
import ScrollViewBounceBackground from "../components/ScrollViewBounceBackground copy";
// import checkOtaUpdate from '../../utils/otaUpdate';
import ApiService from "../services/api/ApiService";
// import { closePopup, setPopup } from "../state/actions/popupActions";
import { useNavigation } from "@react-navigation/native";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const menu = [
  {
    title: "Tarot App",
    subMenu: [
      {
        title: "About Tarot App",
        onPress: (navigation) => {
          navigation.push("about-app");
          // profileInteractionsAnalytics("about us");
        },
        // imageUri: require('../../assets/icons/Profile/inaam_black.png'),
        icon: true,
      },
      // {
      //   title: "Nesto Stores",
      //   onPress: (navigation) => {
      //     // profileInteractionsAnalytics('nesto stores');
      //     navigation.push("Select Store", { goBack: true });
      //   },
      //   icon: true,
      // },
      {
        title: "FAQs",
        onPress: (navigation) => {
          navigation.push("faqs");
        },
        icon: true,
      },
      {
        title: "Contact Us",
        onPress: (navigation) => {
          navigation.push("contact-to-tarot");
        },
        icon: true,
      },
      {
        title: "App Feedback",
        onPress: (navigation) => {
          navigation.push("AppFeedback");
        },
        icon: true,
      },
      {
        title: "Rate Us",
        onPress: () => {
          // profileInteractionsAnalytics("rate us");
          if (Platform.OS === "ios") {
            Linking.openURL(
              "itms-apps://itunes.apple.com/us/app/id910822640?mt=8"
            );
          } else {
            Linking.openURL(`market://details?id=com.AlWafa.Nesto`);
          }
        },
        // imageUri: require('../../assets/icons/Profile/star.png'),
      },
    ],
  },
  {
    title: "Other",
    subMenu: [
      {
        title: `What's New`,
        onPress: (navigation) => {
          // profileInteractionsAnalytics("what's new");
          navigation.push("Whats New");
        },
        // imageUri: require('../../assets/icons/Profile/whatsNew.png'),
        icon: true,
      },
      {
        title: `Check for Updates`,
        onPress: (navigation) => {
          // profileInteractionsAnalytics("what's new");
          // checkOtaUpdate(true);
        },
        prefixIcon: (
          <EvilIcons
            name="refresh"
            size={32}
            color="#181818"
            style={{ marginHorizontal: -4 }}
          />
        ),
      },
      {
        title: "Sign Out",
        onPress: async (navigation, dispatch) => {
          // profileInteractionsAnalytics("sign out");
          setPopup(dispatch, {
            title: "Are you sure you want to sign out?",
            message: "",
            info: true,
            cta: [
              {
                text: "Cancel",
                onPress: () => {
                  closePopup(dispatch);
                },
              },
              {
                text: "Sign Out",
                onPress: async () => {
                  // try {
                  //   await ApiService.customerLogout();
                  // } catch (e) {}
                  // closePopup(dispatch);
                  // await new Promise((resolve) => setTimeout(resolve, 150));
                  // logout(dispatch);
                },
                backgroundColor: "#2D9140",
              },
            ],
          });
        },
        // imageUri: require('../../assets/icons/Profile/log-out.png'),
      },
      {
        title: "Delete Account",
        onPress: (navigation, dispatch) => {
          // profileInteractionsAnalytics("sign out");
          setPopup(dispatch, {
            title: "Are you sure you want to delete your account?",
            message: "",
            info: true,
            cta: [
              {
                text: "Cancel",
                onPress: () => {
                  closePopup(dispatch);
                },
              },
              {
                text: "Delete",
                onPress: async () => {
                  try {
                    await ApiService.deleteAccount();
                  } catch (e) {}
                  closePopup(dispatch);
                  await new Promise((resolve) => setTimeout(resolve, 150));
                  logout(dispatch);
                },
                backgroundColor: "#C91713",
              },
            ],
          });
        },
        prefixIcon: (
          <SimpleLineIcons
            name="user-unfollow"
            size={20}
            color="#181818"
            style={{ marginHorizontal: 2 }}
          />
        ),
      },
    ],
  },
];

const ProfileScreen = () => {
  const apiWrapper = useConditionWrapper();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(galleryStatus.status === "granted");
    })();
  });

  const {
    firstLoad,
    loading,
    data: user,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getUser();
        const user = res.data;
        return user;
      }),
    []
  );

  const pickImg = async () => {
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    });                                                                                                                                                                                                                                                           

    console.log(result)
  };

  console.log(user);
  const navigation = useNavigation();
  return (
    <PageWrapperView
      topSafeArea
      style={{ flex: 1, paddingBottom: 100 }}
      statusBar={{ background: "#1e1621" }}
    >
      <ScrollView>
        <View style={{ height: "40%", paddingHorizontal: 16 }}>
          <View style={styles.bigCircle}></View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 50,
              paddingBottom: 25,
            }}
          >
            <Text style={{ fontSize: 28, color: "#fff", fontWeight: "600" }}>
              Profile
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-between",
                marginRight: 15,
                borderWidth: 0.5,
                borderColor: "#322b35",
                borderRadius: 5,
                paddingHorizontal: 7,
                paddingVertical: 2,
              }}
            >
              <MaterialIcons name="edit" color={"#fff"} size={16} />
              <Text
                style={{ color: "#fff", fontSize: 16 }}
                onPress={() => navigation.navigate("edit-profile")}
              >
                Edit
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 86,
              backgroundColor: "#322b35",
              borderRadius: 10,
              paddingLeft: 10,
            }}
          >
            <View
              style={{
                height: 70,
                backgroundColor: "#d5d5d5",
                width: 70,
                borderRadius: 50,
              }}
            >
              <MaterialIcons
                name="edit"
                color={"black"}
                size={14}
                style={{
                  position: "absolute",
                  bottom: 2,
                  right: 3,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 2,
                }}
                onPress={()=>pickImg()}
              />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                John Deo
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <Image
                  source={require("../assets/taurus-removebg-preview.png")}
                  style={{
                    paddingRight: 20,
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={{ color: "#fff", paddingLeft: 5, fontSize: 12 }}>
                  Taurus, 20 Sept 2022
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          {/* <ScrollView>
          <Text style={{ color: "grey" }}>Tarot App</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("about-app")}
            >
              About Tarot App
            </Text>
            <SimpleLineIcons name={"arrow-right"} size={20} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("faqs")}
            >
              FAQs
            </Text>
            <SimpleLineIcons
              name={"arrow-right"}
              size={20}
              onPress={() => navigation.navigate("Schedule")}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("contact-to-tarot")}
            >
              Contact Us
            </Text>
            <SimpleLineIcons name={"arrow-right"} size={20} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("AppFeedback")}
            >
              App Feedback
            </Text>
            <SimpleLineIcons
              name={"arrow-right"}
              size={20}
              onPress={() => navigation.navigate("Schedule")}
            />
          </View>
          <Text style={{ color: "grey", paddingTop: 20, paddingBottom: 10 }}>
            Other
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 16 }}
              onPress={() => navigation.navigate("whats-new")}
            >
              What's New
            </Text>
            <SimpleLineIcons name={"arrow-right"} size={20} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d5d5",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16 }}>Check for Updates</Text>
            <SimpleLineIcons
              name={"arrow-right"}
              size={20}
              onPress={() => navigation.navigate("Schedule")}
            />
          </View>
        </ScrollView> */}
          {menu?.map((item, index) => (
            <View key={item.title}>
              <MyText
                style={{
                  fontSize: "smd",
                  color: "grey",
                  marginBottom: 10,
                  marginTop: 30,
                }}
              >
                {item.title}
              </MyText>
              {item.subMenu?.map((subMenuItem, index) => (
                <TouchableRipple
                  key={subMenuItem.title}
                  onPress={() => subMenuItem.onPress(navigation)}
                  rippleColor="rgba(229, 229, 229, .32)"
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",

                      paddingVertical: 16,

                      borderBottomWidth: 1,
                      borderBottomColor: "#F2F2F2",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <MyText style={{ fontSize: "md" }}>
                        {subMenuItem.title}
                      </MyText>
                    </View>
                    {subMenuItem.icon ? (
                      <Entypo
                        name="chevron-thin-right"
                        size={18}
                        color="#838383"
                      />
                    ) : (
                      <></>
                    )}
                  </View>
                </TouchableRipple>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </PageWrapperView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingHorizontal: 15,
  },
  bigCircle: {
    backgroundColor: "#1e1621",
    position: "absolute",
    // width: Dimensions.get("window").width * 1.6,
    // height: Dimensions.get("window").width * 1.68,
    width: 602,
    height: 593,
    borderRadius: 700,
    //top: Dimensions.get("window").width * -0.93,
    // left: Dimensions.get("window").width * -0.58,
    top: -305,
    left: -203,
  },
});
