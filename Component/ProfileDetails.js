import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ProfileDetails = ({ navigation }) => {
  return (
    <View>
      {/* profile picture and top info */}
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text>Edit Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Ionicons name="md-checkmark-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* IMAGE */}
        <View>
          <Image
            source={require("../assets/images/image1.jpg")}
            style={{ height: 40, width: 40, borderRadius: 50 }}
          />
          <Text>Change profile photo</Text>
        </View>
      </View>
      {/* {input1} */}
      <View>
        <View
          style={{
            height: 40,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: "#F8F8F8",
          }}
        >
          <TextInput value="text" placeholder="Name" />
        </View>
        <View
          style={{
            height: 40,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: "#F8F8F8",
          }}
        >
          <TextInput value="text" placeholder="UserName" />
        </View>
        <View
          style={{
            height: 40,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: "#F8F8F8",
          }}
        >
          <TextInput value="text" placeholder="Website" />
        </View>
        <View
          style={{
            height: 40,
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: "#F8F8F8",
          }}
        >
          <TextInput value="text" placeholder="Bio" />
        </View>
      </View>
      {/* {input2} */}
      <View>
        <TouchableOpacity>
          <Text>Switch to Professional account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Personal information settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
