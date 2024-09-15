
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header> Welcome to USTP<br></br>    Student Portal </Header>
      <Paragraph>
<<<<<<< HEAD
      Advancing a Sustainable Future.
=======
        Home of the Trailblazers 
>>>>>>> 9ab7dc15b99c18ffe07264cde2473cf1c493dcb5
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
