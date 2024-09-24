import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import BackButton from "../components/BackButton";


const departments = [
  { id: "1", name: "Computer Science", description: "Learn about algorithms and data structures." },
  { id: "2", name: "Mechanical Engineering", description: "Explore design, construction, and mechanics." },
  { id: "3", name: "Business Administration", description: "Focus on finance, management, and economics." },
  { id: "4", name: "Electrical Engineering", description: "Study circuits, robotics, and electronics." },
  { id: "5", name: "Art and Design", description: "Learn about design principles and visual arts." },
  { id: "6", name: "Biology", description: "Understand life forms and biological systems." },
  { id: "7", name: "Mathematics", description: "Delve into pure and applied mathematics." },
  { id: "8", name: "Chemistry", description: "Study chemical reactions and materials." },
  { id: "9", name: "Physics", description: "Learn the laws of nature and physical forces." },
];

export default function DepartmentScreen({ navigation }) {
  return (
    <Background>
       <BackButton goBack={() => navigation.navigate('ListsScreen')} />
      <Logo />
      <Header>Welcome Trailblazers</Header>
      <Paragraph>Explore the departments below:</Paragraph>

      <FlatList
        data={departments}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.departmentCard}>
            <Text style={styles.departmentName}>{item.name}</Text>
            <Text style={styles.departmentDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  departmentCard: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    margin: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  departmentName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  departmentDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
