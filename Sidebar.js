import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const SideNavBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigateToScreen("Home")}
      >
        <MaterialIcons name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigateToScreen("QuizScreen")}
      >
        <MaterialIcons name="question-answer" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigateToScreen("SBScreen")}
      >
        <MaterialIcons name="star-border" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigateToScreen("SentimentAnalysisScreen")}
      >
        <MaterialIcons name="sentiment-satisfied" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigateToScreen("CC")}
      >
        <MaterialIcons name="people" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 70, // Adjust the width as needed
    backgroundColor: "black", // Background color set to black
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  link: {
    marginBottom: 40, // Increased marginBottom for more spacing
  },
});

export default SideNavBar;
