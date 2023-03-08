import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons";
import { Foundation } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Stories from "../Component/Stories";
import homeData from "../Component/homeData";

const Home = () => {
  const [clicked, setClicked] = React.useState(true);
  console.log(clicked);

  let [loaded] = useFonts({
    Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
  });
  if (!loaded) {
    return null; 
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="plus-square-o" size={24} color="black" />
        <Text style={{ fontFamily: "Lobster", fontSize: 27 }}>Instagram</Text>
        <Feather name="navigation" size={24} color="black" />
      </View>
      <View>
        <Stories />
      </View>
      <View>
        {homeData.map((data, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 16,
                }}
              >
                <Image
                  source={data.profile}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {data.name}
                </Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={20} color="black" />
                </TouchableOpacity>
              </View>
              {/* POST IMAGE  */}
              <Image
                source={data.postImage}
                style={{ height: 100 * 4, width: "100%", marginVertical: 10 }}
              />
              {/* POST CONTENT  */}
              <View style={styles.iconCtn}>
                <TouchableOpacity onPress={() => setClicked(!clicked)}>
                  <Ionic
                    name={clicked ? "ios-heart-outline" : "ios-heart"}
                    color={clicked ? "#000" : "red"}
                    size={24}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <EvilIcons
                    name="comment"
                    size={30}
                    color="black"
                    style={{ marginLeft: 0 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                  <Feather
                    name="navigation"
                    size={24}
                    color="black"
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="bookmark" size={24} color="black" />
                </TouchableOpacity>
              </View>
              {/* SECTION FOR LIKE  */}
              <View style={{ marginTop: 10, paddingHorizontal: 13 }}>
                <Text>Liked by {data.likes} others</Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  If enjoy the video ! Please like and Subscribe :)
                </Text>
                <TouchableOpacity style={{ marginTop: 3 }}>
                  <Text style={{ fontSize: 15, color: "#bbb" }}>
                    View all comments
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <TouchableOpacity>
        <Foundation
          name="refresh"
          size={60}
          color="black"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      <View style={{ marginBottom: 50 }}></View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    // marginBottom:
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  iconCtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
  },
});
