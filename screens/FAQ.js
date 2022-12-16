import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import { MyText } from "../components/MyDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import useTimeout from "../hooks/useTimeout";
import PageWrapperView from "../components/PageWrapperView";
import { FAQs } from "../data/FAQs";
import Input from "../components/Input";
import Expandable from "../components/Expandable";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  return (
    // <PageWrapperView topSafeArea dark style={{ flex: 1,paddingHorizontal:15, justifyContent: "space-between", }} statusBar={{ background: '#ffffff' }}>
    <PageWrapperView withBack topSafeArea dark style={{backgroundColor:"#fff"}} statusBar={{ background: '#ffffff' }}>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingHorizontal: 16 }}
        >
          <Octicons
            name="arrow-left"
            size={25}
            style={{ paddingVertical: 10 }}
            onPress={() => navigation.navigate("Profile")}
          />
          <MyText style={{ fontSize: "xl", lineHeight: 36 }} bold>
            Frequently Asked Questions
          </MyText>
          <MyText
            style={{
              fontSize: "md",
              paddingTop: 4,
              color: "#6B6D73",
              lineHeight: 22,
            }}
          >
            We’re here to help you with anything and everything on INAAM.
          </MyText>
          <Input
            placeholder="Search for help"
            style={{ marginTop: 16 }}
            onChangeText={(text) => {
              setSearchQuery(text);
            }}
            value={searchQuery}
            noBorderColorChange
            prefixIcon={<EvilIcons name="search" size={25} color="#747474" />}
          />
          <View style={{ marginTop: 30 }}>
            {FAQs?.filter((faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase())
            )?.map((item, index) => (
              <Expandable
                key={index}
                ques={item?.question}
                ans={item?.answer}
              />
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageWrapperView>
    //</PageWrapperView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 25,
    paddingHorizontal: 15,
  },
});
