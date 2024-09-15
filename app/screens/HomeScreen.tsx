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
 
      <Logo />
<<<<<<< HEAD
      <Header>Welcome Trailblazers</Header>
      <Paragraph>You’ve successfully logged in.</Paragraph>
=======

     
      <Header style={styles.headerText}>Welcome Trailblazers</Header>


      <Paragraph style={styles.paragraphText}>
        Congratulations, you are successfully logged in!
      </Paragraph>

    
>>>>>>> 9ab7dc15b99c18ffe07264cde2473cf1c493dcb5
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
    color: "#666", 
  },
  button: {
    borderColor: "#6200EE", 
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
