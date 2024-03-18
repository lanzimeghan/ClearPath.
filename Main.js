import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "@expo-google-fonts/montserrat";
import App from "./App";

export default function Main() {
  const [fontsLoaded] = useFonts({
    montserrat: require("@expo-google-fonts/montserrat"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <App />;
}
