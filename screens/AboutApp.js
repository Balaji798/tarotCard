import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const AboutApp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Octicons
        name="arrow-left"
        size={25}
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.navigate("Profile")}
      />
      <ScrollView>
        <Text style={{ fontSize: 26, fontWeight: "bold",paddingBottom:10}}>About Tarot</Text>
        <View style={{width:"100%",height:200,alignItems:"center",justifyContent:"center"}}>
            <View style={{width:200,height:"100%",backgroundColor:"#d5d5d5"}}>

            </View>
        </View>
        <Text style={{paddingVertical:10,lineHeight:20,fontSize:14}}>
          Nesto Hypermarkets bring you one-step closer to our shelves through
          this Customer Care program that is intended to sut the mood and
          purchase patterns of each one of you
        </Text>
        <Text style={{paddingVertical:10,lineHeight:20}}>
          INAAM is a loyalty Program specially designed to aid the Purchasing
          habits of our loyal customers extending our service to a family
          audience by giving them an opportunity to shop more at much less
          through this innovative program
        </Text>
        <Text style={{paddingVertical:10,lineHeight:20}}>
          Would earn substantial savings to the vast number of customers who
          consider NESTO as their second home. Currently operating in the
          countries of UAE,KSA, Bahrain, Oman, Qatar, Kuwait, and India the
          NESTO footprint is soon expected to expand into other markets in Asia
        </Text>
        <Text style={{paddingVertical:10,lineHeight:20}}>
          Would earn substantial savings to the vast number of customers who
          consider NESTO as their second home. Currently operating in the
          countries of UAE,KSA, Bahrain, Oman, Qatar, Kuwait, and India the
          NESTO footprint is soon expected to expand into other markets in Asia
        </Text>
        <Text style={{paddingVertical:10,lineHeight:20}}>
          Would earn substantial savings to the vast number of customers who
          consider NESTO as their second home. Currently operating in the
          countries of UAE,KSA, Bahrain, Oman, Qatar, Kuwait, and India the
          NESTO footprint is soon expected to expand into other markets in Asia
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop:25,
    paddingHorizontal: 15,
  },
});
