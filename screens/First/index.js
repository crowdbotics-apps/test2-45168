import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const First = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable onPress={() => {
        navigation.navigate("Second", {});
      }}>
          <View style={styles.YmMRtAWa}></View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  YmMRtAWa: {
    height: 60,
    width: 140,
    backgroundColor: "#e64e4e",
    borderRadius: 40,
    color: "#777777",
    flexDirection: "row",
    flex: 1,
    position: "absolute"
  }
});
export default First;