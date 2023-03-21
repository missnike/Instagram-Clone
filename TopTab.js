import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Menu from "./toptabs/Menu";
import Profil from "./toptabs/Profil";
import More from "./toptabs/More";
import { Fontisto, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const TopTab = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Fontisto
              name="nav-icon-grid"
              size={focused ? 25 : 20}
              color={focused ? "#000" : "#f8f8f8"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="play-circle-outline"
              size={focused ? 25 : 20}
              color={focused ? "#000" : "#f8f8f8"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="user"
              size={focused ? 25 : 20}
              color={focused ? "#000" : "#f8f8f8"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TopTab;
