import { StyleSheet } from "react-native-web";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GalleryScreen from "../screens/GalleryScreen";
import Home from "../screens/Home";
import ProfileScreen from "../screens/ProfileScreen";
import ScheduleScreens from "../screens/ScheduleScreens";
import ShopScreens from "../screens/ShopScreens";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // style: {
        //   position: "absolute",
        //   bottom: 100,
        // },
        "tabBarActiveTintColor": "black",
        "tabBarInactiveTintColor": "#d9d9d9",
        "tabBarStyle": [
          {
            "display":"flex",
            position: "absolute",
            backgroundColor: "#fff",
            borderTopWidth: 0,
            bottom: 28,
            left: 16,
            right: 16,
            borderRadius: 15,
            height: 68,
          },
          null,
        ],
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <Icon name="calendar" color={color} size={size}/>
            <Octicons name={"calendar"} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="ShopScreens"
        component={ShopScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <Icon name="calendar" color={color} size={size}/>
            <AntDesign name={"shoppingcart"} color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#fff",
    borderTopWidth: 0,
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 15,
    height: 60,
  },
  
});
