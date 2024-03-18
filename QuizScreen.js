import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuizScreen = () => {
  const questions = [
    "1) What are your motivations for quitting? (i.e. friends, family, health)",
    "2) What are some of your triggers? (i.e. school, family, anxiety, etc.)",
    "3) List some long term goals and milestones you have. (i.e. 1 week sober, don't succumb to peer pressure, login to my journal at least twice a week) Remember, these goals don't have to be big!",
  ];

  const navigation = useNavigation();

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const renderQuizQuestions = () => {
    return (
      <View>
        <Text style={styles.question}>{questions[currentQuestionIndex]}</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleAnswerChange}
          value={answers[currentQuestionIndex]}
          placeholder="Type your answer here"
          multiline={true}
          numberOfLines={4}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Previous"
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          />
          <Button title="Next" onPress={handleNextQuestion} />
        </View>
      </View>
    );
  };

  const renderQuizSummary = () => {
    return (
      <ScrollView>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Your Results</Text>
          <Text style={styles.resultsSubtitle}>
            Keep these in mind throughout your journey!
          </Text>
        </View>
        {questions.map((question, index) => (
          <View key={index} style={styles.summaryItem}>
            <Text style={styles.summaryQuestion}>{question}</Text>
            <Text style={styles.summaryAnswer}>{answers[index]}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  const handleHomePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {!quizCompleted ? renderQuizQuestions() : renderQuizSummary()}
      <TouchableOpacity onPress={handleHomePress} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: "20%", // Adjusted marginTop for lower placement
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: Dimensions.get("window").width - 40,
    height: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  summaryItem: {
    marginBottom: 20,
  },
  summaryQuestion: {
    fontSize: 16,
    marginBottom: 5,
  },
  summaryAnswer: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#245f33",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultsContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  resultsTitle: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  resultsSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "gray",
  },
});

export default QuizScreen;
