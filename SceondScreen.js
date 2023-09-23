import React, { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Text, BackHandler } from "react-native";

export default function SecondScreen({ route, navigation }) {
  const close = () => {
    navigation.goBack(null);
    return true; // Return true to prevent default behavior (exit the app)
  };

  useEffect(() => {
    if (route.params?.message) {
      alert(route.params.message);
    }
    BackHandler.addEventListener("hardwareBackPress", close);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", close);
    };
  }, []); // Added route.params as a dependency

  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});
