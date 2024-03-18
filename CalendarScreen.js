import React, { useState, useEffect } from "react";
import { View, Text, Calendar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CalendarScreen = ({ route }) => {
  const { sentimentEmoji } = route.params;
  const [selectedDaySentiment, setSelectedDaySentiment] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    if (sentimentEmoji) {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${
        today.getDate() < 10 ? "0" : ""
      }${today.getDate()}`;
      const updatedSentiment = {
        [formattedDate]: {
          selected: true,
          selectedColor: "green",
          text: sentimentEmoji,
        },
      };
      setSelectedDaySentiment(updatedSentiment);
    }
  }, [sentimentEmoji]);

  return (
    <View>
      <Text>Calendar Screen</Text>
      <Calendar markedDates={selectedDaySentiment} />
    </View>
  );
};

export default CalendarScreen;
