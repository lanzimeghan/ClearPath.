import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import SideNavBar from "./Sidebar";

const SobrietyTrackerAgeScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateDays = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const daysPassed = Math.round(Math.abs((currentDate - startDate) / oneDay));
    return daysPassed;
  };

  const daysSober = calculateDays();

  const markedDates = {
    [currentDate.toISOString().split("T")[0]]: {
      selected: true,
      selectedColor: "green",
    },
  };

  return (
    <View style={styles.container}>
      <SideNavBar />
      <Text style={styles.days}>{daysSober}</Text>
      <Text style={styles.subtitle}>The Day You Started</Text>
      <Text style={styles.message}>Keep Going!</Text>
      <Calendar
        style={styles.calendar}
        markingType="custom"
        markedDates={markedDates}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  days: {
    marginLeft: 30,
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    marginLeft: 30,
    fontSize: 24,
    marginBottom: 10,
  },
  message: {
    marginLeft: 30,
    fontSize: 18,
    color: "green",
  },
  calendar: {
    marginLeft: 30,
    marginTop: 20,
  },
});

export default SobrietyTrackerAgeScreen;
