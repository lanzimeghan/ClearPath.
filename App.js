import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Home from "./Home";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SideNavBar from "./Sidebar";
import QuizScreen from "./QuizScreen";
import SentimentAnalysisScreen from "./SentimentAnalysisScreen";
import CalendarScreen from "./CalendarScreen";
import SobrietyTrackerAgeScreen from "./SobreityTracker";
import { AppLoading } from "expo";
import { useFonts } from "@expo-google-fonts/montserrat";
import CommunityMilestonesScreen from "./CommunityMilestones";
import CC from "./CC";
const Tab = createBottomTabNavigator();

var iconHeight = 26;
var iconWidth = 26;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SentimentAnalysisScreen"
          component={SentimentAnalysisScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SBScreen"
          component={SobrietyTrackerAgeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CMScreen"
          component={CommunityMilestonesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CC"
          component={CC}
          options={{ headerShown: false }}
        />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
