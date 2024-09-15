import React from "react";
import { StyleSheet } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      {/* Logo component */}
      <Logo />

      {/* Header with text styling */}
      <Header style={styles.headerText}>Welcome Trailblazers</Header>

      {/* Paragraph with styling */}
      <Paragraph style={styles.paragraphText}>
        Congratulations, you are successfully logged in!
      </Paragraph>

      {/* Sign out button */}
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
        style={styles.button}
      >
        Sign out
      </Button>
    </Background>
  );
}

// StyleSheet for styling components
const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  paragraphText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#666", // Subtle text color
  },
  button: {
    borderColor: "#6200EE", // Custom button border color
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
