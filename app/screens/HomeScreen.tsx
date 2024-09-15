import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Logo />

          <Header style={styles.headerText}>Welcome Trailblazers</Header>

          <Paragraph style={styles.paragraphText}>
            Congratulations, you are successfully logged in!
          </Paragraph>

          <View style={styles.dashboardContainer}>
            <View style={styles.dashboardItem}>
              <Header style={styles.dashboardHeaderText}>Dashboard Item 1</Header>
              <Paragraph style={styles.dashboardParagraphText}>
                This is a sample dashboard item.
              </Paragraph>
            </View>

            <View style={styles.dashboardItem}>
              <Header style={styles.dashboardHeaderText}>Dashboard Item 2</Header>
              <Paragraph style={styles.dashboardParagraphText}>
                This is another sample dashboard item.
              </Paragraph>
            </View>

            <View style={styles.dashboardItem}>
              <Header style={styles.dashboardHeaderText}>Dashboard Item 3</Header>
              <Paragraph style={styles.dashboardParagraphText}>
                This is yet another sample dashboard item.
              </Paragraph>
            </View>

            <View style={styles.dashboardItem}>
              <Header style={styles.dashboardHeaderText}>Dashboard Item 4</Header>
              <Paragraph style={styles.dashboardParagraphText}>
                This is yet another sample dashboard item.
              </Paragraph>
            </View>
          </View>

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
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
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
  dashboardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  dashboardItem: {
    width: width / 2 - 20, // Adjusted width to fit two items per row
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
  },
  dashboardHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dashboardParagraphText: {
    fontSize: 14,
    color: "#666",
  },
});