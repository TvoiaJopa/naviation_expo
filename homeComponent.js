import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign
import { message } from "antd";
import { TextInput } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState("Testing");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#f0f0f0" }, // Fix the typo here
      headerRight: () => (
        <AntDesign
          style={style.navButton}
          name="arrowright"
          size={24}
          onPress={() => navigation.navigate("Second", { message: message })}
        />
      ),
    });
  }, []);
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <TextInput
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Type message here"
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  navButton: { marginRight: 5, padding: 4 },
});
