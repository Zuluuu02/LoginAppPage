import React from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header> Welcome to USTP<br></br>    Student Portal </Header>
      <Paragraph>
      Advancing a Sustainable Future.
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
}
