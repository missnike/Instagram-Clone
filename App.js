import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTab from "./TopTab";
import BottomTab from "./BottomTab";
import Profile from "../screens/Profile";
import ProfileDetails from "../Component/ProfileDetails";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="TopTab" component={TopTab} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({});
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
