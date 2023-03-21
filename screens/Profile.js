import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { AntDesign, Octicons, Entypo } from "@expo/vector-icons";
import ProfileRow from "../Component/ProfileRow";
import TopTab from "../TopTab";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Top BAR */}
      <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>mr_peobody</Text>
          <Entypo name="chevron-small-down" size={22} color="grey" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign
            name="plussquareo"
            size={20}
            color="black"
            style={{ paddingHorizontal: 20 }}
          />
          <Octicons name="three-bars" size={20} color="black" />
        </View>
      </View>
      {/* PROFILE ROW */}
      <View>
        <FlatList
          ListHeaderComponent={ProfileRow}
          // ListFooterComponent={TopTab}
        />
      </View>
      <TopTab />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
});
