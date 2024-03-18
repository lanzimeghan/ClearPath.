import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";

// Set your API key
const apiKey = "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";

// Function to generate text
const generateText = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: prompt,
        max_tokens: 100, // Maximum number of tokens to generate
        n: 1, // Number of completions to generate
        temperature: 0.7, // Controls randomness of text generation
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating text:", error.message);
    return null;
  }
};

const MilestonePage = () => {
  const [affirmation, setAffirmation] = useState("");
  const [wellnessChallenge, setWellnessChallenge] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    generateAffirmation();
    generateWellnessChallenge();
  }, []);

  const generateAffirmation = async () => {
    const affirmation = await generateText(
      "Generate an affirmation for today."
    );
    setAffirmation(affirmation || "Unable to generate affirmation.");
  };

  const generateWellnessChallenge = async () => {
    const challenge = await generateText(
      "Give me a wellness challenge for today."
    );
    setWellnessChallenge(challenge || "Unable to generate wellness challenge.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daily Affirmation</Text>
      <Text style={styles.text}>{affirmation}</Text>

      <Text style={styles.heading}>Wellness Challenge</Text>
      <Text style={styles.text}>{wellnessChallenge}</Text>

      {error && <Text style={styles.error}>{error}</Text>}
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
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default MilestonePage;
