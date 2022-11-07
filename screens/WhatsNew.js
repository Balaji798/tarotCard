import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const WhatsNew = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Octicons
        name="arrow-left"
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Profile")}
      />
      <Text style={{ fontSize: 26, fontWeight: "bold"}}>What's New</Text>
      <Text style={{color:"grey"}}>9.3.1</Text>
      <Text style={{paddingTop:15,lineHeight:25}}>We update the Tarot app as often as possible to make it faster, more reliable and secured for you.</Text>

    </SafeAreaView>
  )
}

export default WhatsNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop:25,
    paddingHorizontal: 15,
  },
})