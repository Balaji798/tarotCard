import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
  Text,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
import React, { useState, useEffect } from "react";
import { MyText } from "../components/MyDesign";
import PageWrapperView from "../components/PageWrapperView";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useKeyboard from "../hooks/useKeyboard";
import Input from "../components/Input";
import useApi from "../hooks/useApi";
import NPSRatingBar from "../components/NPSRatingBar";
import ApiService from "../services/api/ApiService";

const MCQOptions = ({ options, answer, setAnswer }) => {
  return (
    <>
      {options?.map((option, idx) => (
        <TouchableOpacity
          onPress={() => setAnswer(option)}
          key={idx}
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            borderWidth: 1,
            borderColor: answer === option ? "transparent" : "#D1D1D1",
            backgroundColor:
              answer === option ? "rgba(45, 145, 64, 1)" : "white",
            borderRadius: 10,
          }}
        >
          <MyText
            style={{
              color: answer === option ? "white" : "#181818",
              fontWeight: "bold",
            }}
            bold
          >
            {option}
          </MyText>
        </TouchableOpacity>
      ))}
    </>
  );
};

const AppFeedback = () => {
  const options = ["Promotions", "Tarot Cards", "Shopping"];
  const [answers, setAnswers] = useState("");
  const keyBoardState = useKeyboard();

  const apiWrapper = useConditionWrapper();

  const {
    loading,
    data: surveyDetails,
    reload,
  } = useApi(async () =>
    apiWrapper(async () => {
      const res = await ApiService.fetchFeedback();
      return res.data.survey_details;
    })
  );

  useEffect(() => {
    setAnswers(
      surveyDetails?.questions?.map((question) => ({
        question: question.uuid,
        content: question.type === "paragraph" ? "" : 0,
        isRequired: question.is_required,
        type: question.type,
      }))
    );
  }, [surveyDetails]);

  const handleAnswer = (index, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index].content = answer;
      return newAnswers;
    });
  };

  console.log(answers);

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const navigation = useNavigation();
  return (
    <PageWrapperView
      withBack
      topSafeArea
      bottomSafeArea
      statusBar={{ style: "dark" }}
    >
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : ""}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingHorizontal: 16 }}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <Octicons
            name="arrow-left"
            size={25}
            style={{ paddingVertical: 10 }}
            onPress={() => navigation.navigate("Profile")}
          />
          <MyText style={{ fontSize: "xl", fontWeight: "bold" }} bold>
            Tarot Feedback
          </MyText>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 20,
              borderBottomWidth: 0.7,
              borderBottomColor: "#d9d9d9",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              How satisfied are you with the look and feel of the app?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text>Very Unlikely</Text>
              <Text>Very Likely</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              {num.map((_, index) => (
                <TouchableOpacity
                  style={{
                    width: 36,
                    height: 40,
                    backgroundColor:
                      index <= 5
                        ? "red"
                        : index === 6 || index === 7
                        ? "#FFD700"
                        : "green",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: index != 9 ? 1 : 0,
                    borderRightColor: "#fff",
                    borderTopLeftRadius: index === 0 ? 5 : 0,
                    borderBottomLeftRadius: index === 0 ? 5 : 0,
                    borderTopRightRadius: index === 9 ? 5 : 0,
                    borderBottomRightRadius: index === 9 ? 5 : 0,
                  }}
                  key={index}
                >
                  <Text style={{ color: "#fff" }}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              paddingTop: 25,
              paddingBottom: 20,
              borderBottomWidth: 0.7,
              borderBottomColor: "#d9d9d9",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              How satisfied are you with the look and feel of the app?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text>Very Unlikely</Text>
              <Text>Very Likely</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              {num.map((_, index) => (
                <TouchableOpacity
                  style={{
                    width: 36,
                    height: 40,
                    backgroundColor:
                      index <= 5
                        ? "red"
                        : index === 6 || index === 7
                        ? "#FFD700"
                        : "green",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: index != 9 ? 1 : 0,
                    borderRightColor: "#fff",
                    borderTopLeftRadius: index === 0 ? 5 : 0,
                    borderBottomLeftRadius: index === 0 ? 5 : 0,
                    borderTopRightRadius: index === 9 ? 5 : 0,
                    borderBottomRightRadius: index === 9 ? 5 : 0,
                  }}
                  key={index}
                >
                  <Text style={{ color: "#fff" }}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              paddingTop: 25,
              paddingBottom: 20,
              borderBottomWidth: 0.7,
              borderBottomColor: "#d9d9d9",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              How satisfied are you with the loading speed of mobile app?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text>Very Unlikely</Text>
              <Text>Very Likely</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              {num.map((_, index) => (
                <TouchableOpacity
                  style={{
                    width: 36,
                    height: 40,
                    backgroundColor:
                      index <= 5
                        ? "red"
                        : index === 6 || index === 7
                        ? "#FFD700"
                        : "green",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: index != 9 ? 1 : 0,
                    borderRightColor: "#fff",
                    borderTopLeftRadius: index === 0 ? 5 : 0,
                    borderBottomLeftRadius: index === 0 ? 5 : 0,
                    borderTopRightRadius: index === 9 ? 5 : 0,
                    borderBottomRightRadius: index === 9 ? 5 : 0,
                  }}
                  key={index}
                >
                  <Text style={{ color: "#fff" }}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              paddingTop: 25,
              paddingBottom: 20,
              borderBottomWidth: 0.7,
              borderBottomColor: "#d9d9d9",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              How would you rate your customer support experience?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text>Very Unlikely</Text>
              <Text>Very Likely</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              {num.map((_, index) => (
                <TouchableOpacity
                  style={{
                    width: 36,
                    height: 40,
                    backgroundColor:
                      index <= 5
                        ? "red"
                        : index === 6 || index === 7
                        ? "#FFD700"
                        : "green",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: index != 9 ? 1 : 0,
                    borderRightColor: "#fff",
                    borderTopLeftRadius: index === 0 ? 5 : 0,
                    borderBottomLeftRadius: index === 0 ? 5 : 0,
                    borderTopRightRadius: index === 9 ? 5 : 0,
                    borderBottomRightRadius: index === 9 ? 5 : 0,
                  }}
                  key={index}
                >
                  <Text style={{ color: "#fff" }}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 20 }}
          >
            What do you like most about TAROT APP?
          </Text>
          <MCQOptions
            options={options}
            answer={answers}
            setAnswer={setAnswers}
          />
          <Text
            style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 20 }}
          >
            Do you have any additional comments/suggestion? (Optional)
          </Text>
          <View
            style={{
              paddingBottom: 16,
            }}
          >
            <Input textArea />
          </View>
        </ScrollView>
        {/* <BottomButton
        title="Submit"
        disabled={
          !answers?.every(
            (answer) => !answer.isRequired || (answer.type === 'paragraph' ? answer.content !== '' : answer.content !== 0)
          )
        }
        style={{ margin: 16, marginBottom: keyBoardState || Platform.OS === 'android' ? 16 : 0 }}
        onPress={async () =>
          apiWrapper(
            async () => {
              await ApiService.submitFeedback(surveyDetails.uuid, answers);
              props.navigation.replace('Success', {
                text: ['Thank you for your feedback'],
               // image: require('../assets/images/success/successful.png'),
                subText: ['We really appreciate it since we’re always looking', 'for ways to make INAAM App even better'],
              });
            },
            () => {
              props.navigation.replace('Success', {
                text: ['Something went wrong!'],
               // image: require('../assets/images/error/error.png'),
                subText: ['Please try again later'],
              });
            }
          )
        }
      /> */}
        <TouchableOpacity
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#d9d9d9",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "grey" }}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </PageWrapperView>
  );
};

export default AppFeedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingVertical: 25,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
});
