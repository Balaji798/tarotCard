import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import ApiService from "../services/api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";

const JyotisScreen = () => {
  const [tab, setTab] = useState(false);
  const [id,setId]=useState("");

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: jyotis,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.fetchJyotis();
        const jyotis = res.data;
        return jyotis;
      }),
    []
  );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#d9d9d9" />
      <ScrollView
        style={{ width: "100%", backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ paddingVertical: 10 }}>
          <MaterialIcons
            name={"arrow-back-ios"}
            size={25}
            onPress={() => navigation.navigate("Schedule")}
          />
        </View>
        <Text style={{ fontSize: 28, width: "70%" }}>
          <Text style={{ fontWeight: "bold" }}>Who</Text> do you want to meet?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {jyotis.map((item, index) => (
            <TouchableOpacity
              style={{
                backgroundColor: id===item._id ? "black" : "#fff",
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
              onPress={() => {
                setId(item._id);
              }}
            >
              <View
                style={{
                  height: 50,
                  backgroundColor: "#d5d5d5",
                  width: 50,
                  borderRadius: 30,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center",
                    color: id===item._id ? "#fff" : "black",
                  }}
                >
                  {item.firstName} {item.lastName}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: id===item._id ? "#fff" : "black",
                  }}
                >
                  Jyotish Name
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <Image />
        </View>
        <TouchableOpacity
          style={{
            color: "#fff",
            backgroundColor: "black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("schedule-jyotis",{ id: id })}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default JyotisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingLeft: 15,
    paddingRight: 15,
  },
});
