import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SideNavBar from "./Sidebar";

const generateAffirmation = () => {
  const affirmations = [
    "I am strong and capable of overcoming any challenge.",
    "I am worthy of love and respect.",
    "I am in control of my choices and actions.",
    "I believe in my ability to succeed.",
    "I am deserving of happiness and fulfillment.",
  ];
  return affirmations[Math.floor(Math.random() * affirmations.length)];
};

const generateWellnessChallenge = () => {
  const challenges = [
    "Take a 10-minute walk outside and focus on deep breathing.",
    "Replace one unhealthy snack with a nutritious option today.",
    "Practice mindfulness meditation for 5 minutes.",
    "Drink 8 glasses of water throughout the day.",
    "Engage in a physical activity you enjoy for at least 30 minutes.",
  ];
  return challenges[Math.floor(Math.random() * challenges.length)];
};

const CC = () => {
  const [affirmation, setAffirmation] = useState("");
  const [challenge, setChallenge] = useState("");

  const handleGenerateAffirmation = () => {
    const newAffirmation = generateAffirmation();
    setAffirmation(newAffirmation);
  };

  const handleGenerateChallenge = () => {
    const newChallenge = generateWellnessChallenge();
    setChallenge(newChallenge);
  };

  return (
    <View style={styles.container}>
      <SideNavBar />
      <View style={styles.content}>
        <Text style={[styles.text, styles.heading]}>Affirmation</Text>
        <Text style={styles.result}>{affirmation}</Text>
        <Button
          style={[styles.button, { marginLeft: 60 }]} // Add marginLeft: 60
          title="Generate Affirmation"
          onPress={handleGenerateAffirmation}
          color="#006400" // Dark green color for button
        />

        <Text style={[styles.text, styles.heading]}>Challenge</Text>
        <Text style={styles.result}>{challenge}</Text>
        <Button
          style={[styles.button, { marginLeft: 60 }]} // Add marginLeft: 60
          title="Generate Challenge"
          onPress={handleGenerateChallenge}
          color="#006400" // Dark green color for button
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    marginLeft: 60,
    paddingLeft: 20, // Padding from the navbar
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  result: {
    fontSize: 18,
    textAlign: "center",
    color: "#000000", // Black color
  },
  button: {
    // No need to specify marginLeft here
  },
});

export default CC;
