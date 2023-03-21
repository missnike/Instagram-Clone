import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import ProfileData from "./ProfileData";
import ProfileDetails from "./ProfileDetails";

const ProfileRow = ({ navigation }) => {
  return (
    <View>
      {/* profile info */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
          marginHorizontal: 25,
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("../assets/images/image1.jpg")}
            style={{ height: 70, width: 70, borderRadius: 50 }}
          />
          <Text>Mr Peobody</Text>
        </View>
        <View>
          <Text>458</Text>
          <Text>Posts</Text>
        </View>
        <View>
          <Text> 3.6M</Text>
          <Text>Followers</Text>
        </View>
        <View>
          <Text>35</Text>
          <Text>Following</Text>
        </View>
      </View>
      {/* EDIT Profile */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileDetails');
          }}
          style={styles.edit}
        >
          <Text style={{ fontWeight: "500", fontSize: 13 }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      {/*PROFILE Scrollview  */}
      <View>
        <View>
          <Text>Stroy Highlight</Text>
        </View>
        <FlatList
          horizontal={true}
          data={ProfileData}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 30,
                  width: "12.5%",
                  backgroundColor: "red",
                  borderRadius: 10,
                  borderColor: "RED",
                  marginBottom: 10,
                }}
              ></View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProfileRow;

const styles = StyleSheet.create({
  edit: {
    height: 35,
    width: "90%",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20,
    borderColor: "#F8F8F8",
  },
});
