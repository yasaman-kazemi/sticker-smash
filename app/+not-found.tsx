import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        name="not-found"
        options={{ headerTitle: "Oops, Not found!" }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to nothing land!</Text>
        <Link href={"/"} style={styles.button}>
          Back to reality
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf2e9",
  },
  text: { color: "#000" },
  button: {
    backgroundColor: "#1a5276",
    padding: 4,
    margin: 8,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
  },
});
