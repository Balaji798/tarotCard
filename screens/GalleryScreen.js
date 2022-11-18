import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import PageWrapperView from "../components/PageWrapperView";

const GalleryScreen = () => {
  const [tab, setTab] = useState(false);
  const navigation = useNavigation();
  return (
    <PageWrapperView
      topSafeArea
      dark
      style={{ paddingBottom: 50 }}
      statusBar={{ background: "#d9d9d9" }}
    >
      <ScrollView
        style={{ width: "100%", backgroundColor: "transparent",paddingHorizontal: 16, }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Gallery</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "space-between",
              height: 150,
              width: "47%",
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 50,
                backgroundColor: "#d5d5d5",
                width: 50,
                borderRadius: 30,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Folder Name
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                233 Videos
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "space-between",
              height: 150,
              width: "47%",
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("videos")}
          >
            <View
              style={{
                height: 50,
                backgroundColor: "#d5d5d5",
                width: 50,
                borderRadius: 30,
              }}
            ></View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Folder Name
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#fff",
                }}
              >
                12 Videos
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "space-between",
              height: 150,
              width: "47%",
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 50,
                backgroundColor: "#d5d5d5",
                width: 50,
                borderRadius: 30,
              }}
            ></View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold", fontSize: 16 }}>
                Folder Name
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                233 Videos
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </PageWrapperView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingTop: 25,
    paddingHorizontal: 15,
  },
});
