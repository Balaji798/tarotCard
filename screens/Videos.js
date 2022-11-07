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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";

const Videos = () => {
  const [tab, setTab] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons
        name={"arrow-back-ios"}
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Gallery")}
      />
      {/* <StatusBar animated={true} backgroundColor="#d9d9d9" /> */}
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Folder Name</Text>
      <ScrollView
        style={{ width: "100%", backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingTop: 10,
          }}
        >
          <View style={{ width: "100%",paddingBottom:10 }}>
            <View
              style={{
                height: 180,
                width: "100%",
                backgroundColor: "#d9d9d9",
                borderRadius: 10,
              }}
            ></View>
            <View style={{ width: "100%", justifyContent: "space-between",flexDirection:"row",paddingVertical:10 }}>
              <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>video Name</Text>
                <Text>112K views</Text>
              </View>
              <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>2 hr 30 mins</Text>
                <Text>3 weeks ago</Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%",paddingBottom:10 }}>
            <View
              style={{
                height: 180,
                width: "100%",
                backgroundColor: "#d9d9d9",
                borderRadius: 10,
              }}
            ></View>
            <View style={{ width: "100%", justifyContent: "space-between",flexDirection:"row",paddingVertical:10 }}>
              <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>video Name</Text>
                <Text>112K views</Text>
              </View>
              <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>20 mins</Text>
                <Text>3 weeks ago</Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%",paddingBottom:10 }}>
            <View
              style={{
                height: 180,
                width: "100%",
                backgroundColor: "#d9d9d9",
                borderRadius: 10,
              }}
            ></View>
            <View style={{ width: "100%", justifyContent: "space-between",flexDirection:"row",paddingVertical:10 }}>
              <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>Video Name</Text>
                <Text>112K views</Text>
              </View>
              <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>2 hr 30 mins</Text>
                <Text>3 weeks ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
});
