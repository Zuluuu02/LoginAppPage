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
      <Header>
        Welcome to USTP{"\n"}   Student Portal
      </Header>
      <Paragraph>
        Home of the Trailblazers
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")} style={undefined}      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")} style={undefined}      >
        Create an account
      </Button>
    </Background>
  );
};