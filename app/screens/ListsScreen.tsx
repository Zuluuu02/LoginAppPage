import React from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

export default function ListsScreen({ navigation }) {
    return (
        <Background>
             <BackButton goBack={() => navigation.navigate('HomeScreen')} />
            <Logo />
            <Header>Your Lists</Header>
            <Paragraph>Here are your lists.</Paragraph>
            <Button
        mode="outlined"
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: "DepartmentScreen" }],
        })} style={undefined}      >
        Departments
      </Button>
        </Background>
    );
}