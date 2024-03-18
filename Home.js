import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/native";
import ProfileImage from "./Profile";
import SideNavBar from "./Sidebar";

const Home = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("ProfileScreen");
  };

  const handleQuizPress = () => {
    navigation.navigate("QuizScreen");
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <SideNavBar />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.subtitle}>Let's get clean, one day at a time</Text>
      <TouchableOpacity onPress={handleQuizPress} style={styles.quiz}>
        <Text style={styles.quizText}>Take the Quiz</Text>
        <Text style={styles.quizDescription}>
          Take the first step towards recovery by designing your long-term goals
          to effectively fight addiction. Gain a deeper understanding of
          yourself, your triggers, and your future goals with our personalized
          quiz.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile} onPress={handleProfilePress}>
        <ProfileImage onPress={handleProfilePress} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Plant-themed green background color
  },
  welcome: {
    fontFamily: "montserrat",
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 20,
    marginTop: -80,
    color: "#245f33", // Darker green text color
  },
  subtitle: {
    marginLeft: 50,
    fontStyle: "italic", // Italicized style
    fontSize: 15, // Bigger font size
    marginBottom: 40,
    marginTop: -10, // Increased marginBottom for better organization
    color: "#245f33", // Darker green text color
  },
  quiz: {
    width: 250,
    backgroundColor: "#245f33", // Dark green background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 70,
    alignItems: "center",
    height: 200,
  },
  quizText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text color
  },
  quizDescription: {
    color: "#fff", // White text color
    textAlign: "center",
    marginTop: 10,
  },
  profile: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default Home;
