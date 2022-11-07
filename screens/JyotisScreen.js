import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React,{useState} from "react";

const JyotisScreen = () => {
  const [tab,setTab] = useState(false)
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#d9d9d9" />
      <ScrollView style={{width:"100%",backgroundColor:"transparent"}}
        showsVerticalScrollIndicator ={false}
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
        <View
          style={{
            backgroundColor: tab ?"#fff":"black",
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
          onPress={()=>{setTab((i)=>!i)}}
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
                color:"#fff"
              }}
            >
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color:"#fff"
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
              Jyotish Name
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Jyotish Name
            </Text>
          </View>
        </View>
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
            marginVertical:10
          }}
          onPress={() => navigation.navigate("schedule-jyotis")}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
