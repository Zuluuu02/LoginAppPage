import React from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />

      {/* Updated header with proper line break */}
      <Header>
        Welcome to USTP{"\n"}   Student Portal
      </Header>

      {/* Updated paragraph content */}
      <Paragraph>
        Home of the Trailblazers
      </Paragraph>

      {/* Button to navigate to the login screen */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")} style={undefined}      >
        Log in
      </Button>

      {/* Button to navigate to the register screen */}
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")} style={undefined}      >
        Create an account
      </Button>
    </Background>
  );
}
