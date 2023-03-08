import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Reels from "./screens/Reels";
import Activity from "./screens/Activity";
import Profile from "./screens/Profile";
import Ionic from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from "@expo/vector-icons";


const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle: {
                    height: 50,
                    // backgroundColor: 'red'
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'home-sharp' : 'home-outline'
                    } else if (route.name === "Search") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'search' : 'ios-search-outline'
                    } else if (route.name === "Reels") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline'
                    } else if (route.name === "Activity") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'ios-heart' : 'ios-heart-outline'
                    } else if (route.name === "Profile") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'ios-person-outline' : 'ios-person-outline'
                    }
                    return <Ionic size={size} name={iconName} color={'black'} />
                }
            })}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Search'
                component={Search}

            />
            <Tab.Screen
                name='Reels'
                component={Reels}
            // options={{
            //     headerShown: false,
            //     tabBarIcon: ({ }) => (
            //         <MaterialCommunityIcons name="account" color={'red'} size={20} />
            //     ),
            // }}
            />
            <Tab.Screen
                name='Activity'
                component={Activity}
            // options={{
            //     headerShown: false,
            //     tabBarIcon: ({ }) => (
            //         <MaterialCommunityIcons name="account" color={'red'} size={20} />
            //     ),
            // }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default BottomTab