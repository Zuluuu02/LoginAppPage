import React from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome Trailblazers</Header>
      <Paragraph>You've successfully logged in.</Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: "StartScreen" }],
        })} style={undefined}      >
        Sign out
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: "ListsScreen" }],
        })} style={undefined}      >
        Lists
      </Button>
    </Background>
  );
}