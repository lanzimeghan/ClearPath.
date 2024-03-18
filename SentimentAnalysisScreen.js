import React, { useState } from "react";
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const getSentimentEmoji = (score) => {
  if (score >= -0.9 && score <= -0.4) {
    return "😞"; // Bad
  } else if (score > -0.4 && score <= 0.2) {
    return "😐"; // OK
  } else if (score > 0.2 && score <= 0.9) {
    return "😊"; // Good
  } else {
    return "❓"; // Unknown or out of range
  }
};

const MoodJournalScreen = () => {
  const [inputText, setInputText] = useState("");
  const [sentimentResult, setSentimentResult] = useState(null);

  const navigation = useNavigation();
  const handleHomePress = () => {
    navigation.navigate("ProfileScreen");
  };

  const analyzeSentiment = async () => {
    try {
      if (!inputText) {
        console.error("Input text is empty");
        return;
      }

      const response = await axios.post(
        "https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyCFHwO6Ao0ehHVzRjntznGGy479YM5AEFA",
        {
          document: {
            type: "PLAIN_TEXT",
            content: inputText,
          },
        }
      );

      const sentimentScore = response.data.documentSentiment.score;
      const emoji = getSentimentEmoji(sentimentScore);
      setSentimentResult({ score: sentimentScore, emoji });
    } catch (error) {
      console.error("Error analyzing sentiment:", error.message);
      console.error("Error details:", error.response.data.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Journal</Text>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter your text here..."
        multiline={true}
        style={styles.input}
      />
      <Button
        title="Analyze Sentiment"
        onPress={analyzeSentiment}
        disabled={!inputText}
      />
      {sentimentResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Mood Log Result:</Text>
          <Text style={styles.resultText}>
            Score: {sentimentResult.score} {"\n"}
            Emoji: {sentimentResult.emoji}
          </Text>
          <TouchableOpacity onPress={handleHomePress} style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: "top",
    width: "100%",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MoodJournalScreen;
