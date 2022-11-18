import { useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React from "react";
import Login from "./screens/Login";
import AppFeedback from "./screens/AppFeedback";
import Intro from "./screens/Intro";
import Verification from "./screens/Verification";
import Tabs from "./navigation/Tabs";
import JyotisScreen from "./screens/JyotisScreen";
import ScheduleJyotis from "./screens/ScheduleJyotis";
import AboutApp from "./screens/AboutApp";
import EditProfile from "./screens/EditProfile";
import FAQ from "./screens/FAQ";
import WhatsNew from "./screens/WhatsNew";
import ContactToApp from "./screens/ContactToApp";
import Videos from "./screens/Videos";
import TarotCadres from "./screens/TarotCadres";
import TarotDetails from "./screens/TarotDetails";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import ProductSearch from "./screens/ProductSearch";
import Wishlist from "./screens/Wishlist";
import Cart from "./screens/Cart";
import SplashScreen from "./screens/SplashScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

export default function App() {
  const [jyotisData,setJyotisData] = useState([]);
  const [error,setError] = useState("");

  useEffect(() => {
    getJyotis();
  }, []);

  const newData = [];

  const getJyotis = async()=>{
    try {
      const url = "http://localhost:8080/product/get_products";
      const res = await axios.get(url);
      newData.push(res.data);
      console.log(jyotisData)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }

  console.log(newData)

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="splash-screen"
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AppFeedback" component={AppFeedback} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="jyotis-booking" component={JyotisScreen} />
        <Stack.Screen name="schedule-jyotis" component={ScheduleJyotis} />
        <Stack.Screen name="contact-to-tarot" component={ContactToApp} />
        <Stack.Screen name="about-app" component={AboutApp} />
        <Stack.Screen name="faqs" component={FAQ} />
        <Stack.Screen name="whats-new" component={WhatsNew} />
        <Stack.Screen name="edit-profile" component={EditProfile} />
        <Stack.Screen name="videos" component={Videos} />
        <Stack.Screen name="tarot-cadres" component={TarotCadres} />
        <Stack.Screen name="tarot-details" component={TarotDetails} />
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="product-details" component={ProductDetails} />
        <Stack.Screen name="product-search" component={ProductSearch} />
        <Stack.Screen name="wish-list" component={Wishlist} />
        <Stack.Screen name="cart" component={Cart}/>
        <Stack.Screen name="splash-screen" component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//
